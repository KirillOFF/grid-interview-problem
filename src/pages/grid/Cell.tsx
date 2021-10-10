import { Box, BoxProps } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { ActionEnum, ICellValue } from './Store';
import { observer } from 'mobx-react-lite';
import { RGBColor } from 'react-color';

export type CellAddress = {
    x: number;
    y: number;
}
type CellProps = {
    value: ICellValue;
    onCellClicked: (cellValue: ICellValue, action: ActionEnum) => void;
    hoverColor: RGBColor;
    backgroundColor: RGBColor;
} & BoxProps;

const Cell = observer((props: CellProps) => {
    const {value, sx,  onCellClicked, backgroundColor, hoverColor, ...other} = props;

    const color = value.isSelected
        ? `rgba(${hoverColor.r}, ${hoverColor.g}, ${hoverColor.b}, ${hoverColor.a})`
        : value.isFilled
            ? `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
            : undefined;

    return (
        <Box
            sx={{
                bgcolor: color,
                color: 'white',
                p: 1,
                textAlign: 'center',
                fontSize: 19,
                fontWeight: '700',
                ...sx,
            }}
            onClick={() => onCellClicked(value, ActionEnum.Click)}
            onMouseOver={() => onCellClicked(value, ActionEnum.MouseOver)}
            onMouseOut={() => onCellClicked(value, ActionEnum.MouseOut)}
            {...other}
        >
            {value.content}
        </Box>
    );
});

export const CustomItem = styled(Cell)`
  display: flex;
  border: 1px solid ${props => props.theme.palette.info.dark};
  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(100%);
  }
`;
