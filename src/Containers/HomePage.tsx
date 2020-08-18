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
    }
`;

const HomePage: React.FunctionComponent = () => {

    const localData: Array<any> = useSelector((state: any) => state.app.data);

    return (
        <StyledDiv>
            Dashboard
            <div className='MainDiv'>
                <div className='ChartsDiv'>
                    <CustomCart />
                    <CustomCart />
                    <CustomCart />
                </div>
                <div>Will be Cards</div>
                <div>
                    <CustomCart />
                </div>
            </div>
        </StyledDiv>
    );
}
export default HomePage;