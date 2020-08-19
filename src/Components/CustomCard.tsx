import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
    margin-top: 1%;
    margin-bottom: 1%;

    .UserImg{
        width: 2vw;
        height: 2vw;
    }

    .Profile{
        font-size: 1vw;
        color: #33EDC4;
        text-decoration: underline;
    }
`;

interface IProps {
    usersList?: { photo: string, firstName: string, lastName: string, total: string }[];
}

const CustomCard: React.FunctionComponent<IProps> = ({ usersList }) => (
    <StyledPaper>
        Best Seller
        <List style={{ width: 235, height: 180 }}>

            {usersList?.map((user, idx) => {
                if (usersList.length === 0) return <p>No sellers</p>;
                return (
                    <div key={idx}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar className='UserImg' alt='img' src='' />
                            </ListItemAvatar>
                            <ListItemText primary={`${user.firstName} ${user.lastName}` || 'Linoy Cohen'} secondary={`$${user.total}` || '$2500'} />
                            <span className='Profile' onClick={() => console.log(idx)}>profile</span>
                        </ListItem>
                        <Divider variant='middle' />
                    </div>
                )
            })}

        </List>
    </StyledPaper>
);

export default CustomCard;