import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CustomChart from '../Components/CustomChart';
import CustomCard from '../Components/CustomCard';
import CustomTopProduct from '../Components/CustomTopProduct';

const StyledDiv = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    .ChartsDiv{
        display: flex;
        justify-content: space-between;
    }

    .MainDiv{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        margin-top: 1%;
    }
`;

const HomePage: React.FunctionComponent = () => {

    const localData: Array<any> = useSelector((state: any) => state.app.data);

    const demoXY = [
        { x: 0, y: 0 },
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
        <StyledDiv>
            <div className='MainDiv'>
                <div className='ChartsDiv'>
                    <CustomChart
                        xy={demoXY}
                        title='Sales'
                        total='5023'
                        color='red'
                    />
                    <CustomChart
                        title='Earn Money'
                        total='6326'
                        color='blue'
                    />
                    <CustomChart
                        title='Order'
                        total='4249'
                        color='green'
                    />
                </div>
                <div className='ChartsDiv'>
                    <CustomCard />
                    <CustomTopProduct />
                </div>
                <div>
                    <CustomChart
                        big={true}
                        title='Revenue'
                        color='#4ECAFE'
                    />
                </div>
            </div>
        </StyledDiv>
    );
}
export default HomePage;