import { ColorResult, RGBColor, SketchPicker } from 'react-color'
import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

interface IColorPickerProps {
    value: RGBColor;
    onColorChanged: (color: RGBColor) => void;
}

const ColorPicker = observer((props: IColorPickerProps) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const handleClick = () => setDisplayColorPicker(!displayColorPicker);
    const handleClose = () => setDisplayColorPicker(false);

    const handleChange = (color: ColorResult) => {
        props.onColorChanged(color.rgb);
    };

    return (
        <div>
            <Swatch onClick={handleClick}>
                <Color value={props.value}/>
            </Swatch>
            {displayColorPicker
                ? <Popover>
                    <Cover onClick={handleClose}/>
                    <SketchPicker color={props.value} onChange={handleChange}/>
                </Popover>
                : null}

        </div>
    )

})

export default ColorPicker;

const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
`

const Color = styled.div<{ value: RGBColor }>`
  width: 200px;
  height: 14px;
  border-radius: 2px;
  background: rgba(${props => props.value.r}, ${props => props.value.g}, ${props => props.value.b}, ${props => props.value.a});
`

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
