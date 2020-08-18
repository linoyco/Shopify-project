import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CustomCart from '../Components/CustomCart';

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
            Dashboard
            <div className='MainDiv'>
                <div className='ChartsDiv'>
                    <CustomCart
                        xy={demoXY}
                        title='Sales'
                        total='5023'
                    />
                    <CustomCart
                        title='Earn Money'
                        total='6326'
                    />
                    <CustomCart
                        title='Order'
                        total='4249'
                    />
                </div>
                <div>Will be Cards</div>
                <div>
                    <CustomCart
                        big={true}
                        title='Revenue'
                    />
                </div>
            </div>
        </StyledDiv>
    );
}
export default HomePage;