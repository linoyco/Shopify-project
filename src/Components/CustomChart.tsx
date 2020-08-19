import * as React from 'react';
import 'react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

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

interface IProps {
    big?: boolean;
    title?: string;
    total?: string;
    subTitle?: string;
    xy?: { x: number, y: number }[];
    color?: string;
}

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
`;

const CustomChart: React.FunctionComponent<IProps> = ({ big = false, color, total, title, xy, subTitle }) => {

    return (
        <StyledPaper>
            {title} <br />
            {big ? null : `$${total || ''}`}
            <XYPlot style={{ color: 'black' }} height={110} width={big ? 750 : 235}>
                {big ? <YAxis /> : null}
                {big ? <XAxis /> : null}
                <LineSeries curve={'curveMonotoneX'} data={xy || data} color={color} />
            </XYPlot>
        </StyledPaper>
    );
}

export default CustomChart;