import { CustomItem } from './Cell';
import Store, { ICellValue } from './Store';
import { Box } from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { RGBColor } from 'react-color';

interface GridProps {
    grid: ICellValue[][];
    hoverColor: RGBColor;
    backgroundColor: RGBColor;
}

export const SmartGrid = observer((props: GridProps) => {
    const {grid, hoverColor, backgroundColor} = props;
    const gridRank = grid.length;
    console.log(`render(). gridRank: ${gridRank}; grid size: ${grid[0].length}x${grid.length}`)

    return <Box sx={{display: 'grid', gridTemplateColumns: `repeat(${gridRank}, calc(95vw/${gridRank}))`}}>
        {
            grid.map((row, y) =>
                row.map((cellValue, x) =>
                    <CustomItem
                        backgroundColor={backgroundColor}
                        hoverColor={hoverColor}
                        value={cellValue}
                        key={`${x}-${y}`}
                        onCellClicked={Store.onCellClicked}
                    />))
        }
    </Box>
});
