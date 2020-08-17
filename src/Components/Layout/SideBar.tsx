import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import { PermIdentity, Computer, History, Payment, SettingsOutlined } from '@material-ui/icons';

const StyledDiv = styled.section`
	display: flex;
	justify-content: center;
	height: 100vh;
    width: 30vw;
    max-width: 220px;
	background-color: #173147;
    transition: width 0.5s ease;
    
    .NavigationItem{
        width: 260px;
    }

    .Nav{
        overflow: hidden;
        color: white;  
    }

    .StyledLink{
        display: flex;
        align-items: center;
        text-decoration:none;
        color: white;
    }

    .WhiteIcon{
        color: white;
    }
`;

const SideBar: FunctionComponent = () => (
    <StyledDiv>
        <List className='Nav'>
            <ListItem className='NavigationItem'>Ni Dashboard</ListItem>
            <Divider />
            <ListItem className='NavigationItem' button>
                <Link className='StyledLink' to={'/'}>
                    <ListItemIcon><Computer className='WhiteIcon' /></ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </Link>
            </ListItem>
            <ListItem className='NavigationItem' button>
                <Link className='StyledLink' to={'/'}>
                    <ListItemIcon><PermIdentity className='WhiteIcon' /></ListItemIcon>
                    <ListItemText primary='User Management' />
                </Link>
            </ListItem>
            <ListItem className='NavigationItem' button>
                <Link className='StyledLink' to={'/'}>
                    <ListItemIcon><History className='WhiteIcon' /></ListItemIcon>
                    <ListItemText primary='History' />
                </Link>
            </ListItem>
            <ListItem className='NavigationItem' button id='user'>
                <Link className='StyledLink' to={'/'}>
                    <ListItemIcon><Payment className='WhiteIcon' /></ListItemIcon>
                    <ListItemText primary='Payment' />
                </Link>
            </ListItem>
            <ListItem className='NavigationItem' button>
                <Link className='StyledLink' to={'/'}>
                    <ListItemIcon><SettingsOutlined className='WhiteIcon' /></ListItemIcon>
                    <ListItemText primary='Settings' />
                </Link>
            </ListItem>
        </List>
    </StyledDiv>
);

export default SideBar;
