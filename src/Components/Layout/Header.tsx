import React, { FunctionComponent } from 'react';
import { Avatar } from '@material-ui/core';
import { NotificationsNone, SettingsOutlined, Menu } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledDiv = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    
    .Img{
        max-width: 25px;
        max-height: 25px;
    }

    .Items{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 30vw;
        margin-right: 0px;
        margin-left: auto;
    }

    #outlined-search{
        width: 8vw;
        height: 0vh;
    }

    .Menu{
        width: 30px;
        height: 30px;
        margin-left: 2%;
    }
`;

const Header: FunctionComponent = () => {

    return (
        <StyledDiv>
            <Menu className='Menu'/>
            <div className='Items'>
                <TextField id="outlined-search" placeholder="Search..." type="search" variant="outlined" />
                <SettingsOutlined />
                <NotificationsNone />
                <Avatar className='Img' alt='image' src='' />
            </div>
        </StyledDiv>
    );
}

export default Header;
