import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { IUser } from '../Containers/HomePage';

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
    margin-top: 1%;
    margin-bottom: 1%;

    .UserImg{
        width: 3vw;
        height: 3vw;
    }

    .Profile{
        font-size: 1vw;
        color: #33EDC4;
        text-decoration: underline;
    }
`;

interface IProps {
    usersList: IUser[];
}

const CustomCard: React.FunctionComponent<IProps> = ({ usersList }) => (
    <StyledPaper>
        buyers
        <List style={{ width: 235, height: 180 }}>

            {usersList.map((user, idx) => {
                if (usersList.length === 0) return <p></p>;
                else return (
                    <div key={idx}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar className='UserImg' alt='img' src='' />
                            </ListItemAvatar>
                            <ListItemText primary={`${user.fullName}` || 'Linoy Cohen'} secondary={`$${user.total}` || '$2500'} />
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