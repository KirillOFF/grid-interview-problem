import React from 'react';
import { Container, Grid, Slider } from '@mui/material';
import Store from './Store';
import { observer } from 'mobx-react-lite';
import { SmartGrid } from './Grid';
import ColorPicker from '../../common/color-picker/ColorPicker';

export const GridPage = observer(() => {
    const {grid, gridRank, onGridRankChanged, hoverColor, backgroundColor, onHoverColorColorChanged, onBackgroundColorColorChanged} = Store;
    return <>
        <Container component='main' maxWidth={false} sx={{pt: 1, pb: 6}}>
            <Grid container>
                <Grid item xs={6}>
                    <Slider value={gridRank} aria-label="Default" valueLabelDisplay="auto"
                            onChange={(_, value) => onGridRankChanged(value)}/>
                </Grid>
                <Grid item xs={3}>
                    <ColorPicker value={hoverColor} onColorChanged={onHoverColorColorChanged}/>
                </Grid>
                <Grid item xs={3}>
                  <ColorPicker value={backgroundColor} onColorChanged={onBackgroundColorColorChanged}/>
                </Grid>
            </Grid>

            <SmartGrid grid={grid} hoverColor={hoverColor} backgroundColor={backgroundColor}/>
        </Container>
    </>
})
