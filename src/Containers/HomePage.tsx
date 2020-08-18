import React from 'react';
import styled from 'styled-components';
import CustomCart from '../Components/CustomCart';

const StyledDiv = styled.section`

`;

const HomePage: React.FunctionComponent = () => (
    <StyledDiv>
        Home Page
        <CustomCart />
    </StyledDiv>
);

export default HomePage;