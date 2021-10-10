import { action, makeAutoObservable, reaction, runInAction } from 'mobx';
import { CellAddress } from './Cell';
import { RGBColor } from 'react-color';

export interface ICellValue {
    isFilled: boolean;
    isSelected: boolean;
    address: CellAddress;
    content?: number
}

enum DirectionEnum {
    Back = 0,
    Forward = 1,
}

enum AxisEnum {
    x = 0,
    y = 1,
}

export enum ActionEnum {
    MouseOver,
    MouseOut,
    Click,
}

class Store {
    constructor() {
        makeAutoObservable(this);
        this.createGrid();

        reaction(() => this.gridRank,
            () => this.createGrid(),
            {delay: 500}
        )
    }

    public grid: ICellValue[][] = [];
    public gridRank = 25;
    public hoverColor: RGBColor = {
        r: 126,
        g: 211,
        b: 33,
        a: 100,
    } as RGBColor;

    public backgroundColor: RGBColor = {
        r: 74,
        g: 144,
        b: 226,
        a: 100,
    } as RGBColor;

    private previousClickedCell?: ICellValue;
    public onCellClicked = (cellValue: ICellValue, action: ActionEnum) => {
        if (!cellValue.isFilled) {
            return;
        }

        const map = new Map<string, ICellValue>();
        this.findFilledCells(cellValue)
            .concat(cellValue)
            .forEach(value => map.set(`${value.address.x}:${value.address.y}`, value));

        switch (action) {
            case ActionEnum.MouseOver:
                map.forEach(cell => runInAction(() => {
                    cell.isSelected = true;
                }));
                break;
            case ActionEnum.MouseOut:
                map.forEach(cell => runInAction(() => {
                    cell.isSelected = false;
                }));
                break;
            case ActionEnum.Click:
                runInAction(() => {
                    if (this.previousClickedCell != null) {
                        this.previousClickedCell.content = undefined;
                    }
                });
                cellValue.content = map.size;
                runInAction(() => this.previousClickedCell = cellValue);
                break;
        }
    }

    private findFilledCells = (startCell: ICellValue) => {
        this.visitedCells.clear();
        const startAddress = startCell.address;
        return [
            ...this.findFilledCellsInDirection(startAddress, AxisEnum.x, DirectionEnum.Back),
            ...this.findFilledCellsInDirection(startAddress, AxisEnum.x, DirectionEnum.Forward),
            ...this.findFilledCellsInDirection(startAddress, AxisEnum.y, DirectionEnum.Back),
            ...this.findFilledCellsInDirection(startAddress, AxisEnum.y, DirectionEnum.Forward),
        ];
    }

    private readonly visitedCells = new Set<string>();
    private findFilledCellsInDirection = (startAddress: CellAddress, axis: AxisEnum, direction: DirectionEnum): ICellValue[] => {
        const key = `${startAddress.x}:${startAddress.y}:${axis}:${direction}`;
        if (this.visitedCells.has(key)) {
            return [];
        }
        this.visitedCells.add(key);

        const getNextIndex = (i: number) => direction === DirectionEnum.Forward ? ++i : --i;
        const getNextAddress = (currentAddress: CellAddress) => {
            return axis === AxisEnum.x
                ? {x: getNextIndex(currentAddress.x), y: currentAddress.y}
                : {x: currentAddress.x, y: getNextIndex(currentAddress.y)};
        }

        const getCell = (address: CellAddress) => this.grid[address.y][address.x]

        const filledCells: ICellValue[] = [];
        let currentAddress = startAddress;
        while (true) {
            const nextAddress = getNextAddress(currentAddress);

            if (nextAddress.x < 0 || nextAddress.x >= this.gridRank ||
                nextAddress.y < 0 || nextAddress.y >= this.gridRank) {
                break
            }

            const currentCell = getCell(nextAddress);
            if (!currentCell.isFilled) {
                break;
            }

            filledCells.push(currentCell);
            currentAddress = currentCell.address;
        }

        const oppositeAxis = this.getOppositeAxis(axis);
        const connectedCellsOnPerpendicularAxis1 = filledCells.flatMap(cell => this.findFilledCellsInDirection(cell.address, oppositeAxis, DirectionEnum.Back));
        const connectedCellsOnPerpendicularAxis2 = filledCells.flatMap(cell => this.findFilledCellsInDirection(cell.address, oppositeAxis, DirectionEnum.Forward));
        return filledCells
            .concat(connectedCellsOnPerpendicularAxis1)
            .concat(connectedCellsOnPerpendicularAxis2);
    }

    private getOppositeAxis = (axis: AxisEnum) => axis === AxisEnum.x ? AxisEnum.y : AxisEnum.x;

    private getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    private getGrid = (size: number) => {
        const minValue = 0;
        const maxValue = 1;
        const array = Array<Array<number>>(size);
        for (let y = 0; y < size; y++) {
            const innerArray = Array<number>(size);
            for (let x = 0; x < size; x++) {
                innerArray[x] = this.getRandomInt(minValue, maxValue);
            }
            array[y] = innerArray;
        }
        return array;
    }

    public onGridRankChanged = action((value: number | number[]) => {
        if (typeof value !== 'number') {
            return;
        }
        this.gridRank = value;
    })

    public onHoverColorColorChanged = action((color: RGBColor) => {
        this.hoverColor = color;
    })

    public onBackgroundColorColorChanged = action((color: RGBColor) => {
        this.backgroundColor = color;
    })

    private createGrid = action(() => {
        const rawGrid = this.getGrid(this.gridRank);
        this.grid = rawGrid
            .map((row, y) =>
                row.map((cellValue, x) => ({
                    address: {x, y},
                    isSelected: false,
                    isFilled: cellValue === 1
                } as ICellValue)));
    })
}

export default new Store();
