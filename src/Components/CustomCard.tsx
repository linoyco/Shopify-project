import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
    margin-top: 1%;
    margin-bottom: 1%;

`;

interface IProps {
    total?: string;
    usersList?: { photo: string, firstName: string, lastName: string }[];
}

const CustomCard: React.FunctionComponent<IProps> = ({ usersList, total }) => (
    <StyledPaper>
        Best Seller
        <List style={{ width: 235, height: 180 }}>

            <ListItem>
                <ListItemAvatar>
                    <Avatar alt='img' src='' />
                </ListItemAvatar>
                <ListItemText primary='Linoy Cohen' secondary={total || '$2500'} />
            </ListItem>

            <Divider variant='middle' />
        </List>
    </StyledPaper>
);

export default CustomCard;