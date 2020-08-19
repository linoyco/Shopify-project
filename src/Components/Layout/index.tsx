import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

import SideBar from './SideBar';
import ContentHeader from './Header';

const StyledDiv = styled.div`
    display: flex;

    .FullWidth{
        width: 100vw;
    }
    .Main{
        background-color: #EAECEC;
        height: 90vh;
        padding: 2vw;
    }
`;

const Layout: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <StyledDiv>
        <SideBar />
        <div className='FullWidth'>
            <ContentHeader />
            <Divider/>
            <div className='Main'>{children}</div>
        </div>
    </StyledDiv>
);

export default Layout;
