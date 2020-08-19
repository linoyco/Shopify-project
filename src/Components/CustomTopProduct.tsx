import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100%;
    margin-left: 3%;

    .Columns{
        display: flex;
        justify-content: space-between;
    }
`;

interface IProps {
    subTitle?: string;
    productList?: { photo: string, description: string, subDescription: string, price: string, sold: string, stack: string }[];
}

const CustomTopProduct: React.FunctionComponent<IProps> = ({ productList, subTitle }) => (
    <StyledPaper>
        Top Product <br />
        <div className='Columns'>
            <span>Photo</span>
            <span>Description</span>
            <span>Price</span>
            <span>Sold</span>
            <span>Stack</span>
            <span></span>
        </div>
        <List style={{ height: 180, }}>

            <ListItem>
                <ListItemAvatar>
                    <Avatar alt='img' src='' />
                </ListItemAvatar>
                <ListItemText primary='Linoy Cohen' secondary={subTitle || '$2500'} />
                <Button>Details</Button>
            </ListItem>

            <Divider variant='middle' />
        </List>
    </StyledPaper>
);

export default CustomTopProduct;