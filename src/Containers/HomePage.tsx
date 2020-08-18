import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CustomCart from '../Components/CustomCart';

const StyledDiv = styled.section`

`;

const HomePage: React.FunctionComponent = () => {

    const localData: Array<any> = useSelector((state: any) => state.app.data);

    return (
        <StyledDiv>
            Dashboard
            <CustomCart />
        </StyledDiv>
    );
}
export default HomePage;