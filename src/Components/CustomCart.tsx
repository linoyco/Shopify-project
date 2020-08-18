import * as React from 'react';
import 'react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import { Paper } from '@material-ui/core';

const CustomCart: React.FunctionComponent = () => {

    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 6 },
        { x: 9, y: 0 }
    ];

    return (
        <Paper>
            <XYPlot height={160} width={235}>
                <YAxis />
                <XAxis />
                <LineSeries curve={'curveMonotoneX'} data={data} />
            </XYPlot>
        </Paper>
    );
}

export default CustomCart;