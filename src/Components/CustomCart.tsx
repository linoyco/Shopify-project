import * as React from 'react';
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis } from 'react-vis';

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
        <div>
            <XYPlot height={500} width={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <XAxis />
                <LineSeries curve={'curveMonotoneX'} data={data} />
            </XYPlot>
        </div>
    );
}

export default CustomCart;