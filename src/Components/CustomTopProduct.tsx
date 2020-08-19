import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import styled from 'styled-components';
import { IProduct } from '../Containers/HomePage';

const StyledPaper: any = styled(Paper)`
    padding: 0.5%;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100%;
    margin-left: 3%;

    .Columns{
        display: flex;
        justify-content: space-between;
        font-weight: normal;
    }

    .Details{
        color: #4ECAFE;
    }
`;

interface IProps {
    productList: IProduct[];
}

const CustomTopProduct: React.FunctionComponent<IProps> = ({ productList }) => (
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
            {/* {productList.map((product, idx) => {
                if (productList.length === 0) return <p></p>;
                else return (
                    <div key={idx}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar alt='img' src='' />
                            </ListItemAvatar>
                            <ListItemText primary={`${product.description || ''}`} secondary={`${product.subDescription}` || ''} />
                            <ListItemText primary={`$${product.price || ''}`} />
                            <Button className='Details' variant='outlined'>Details</Button>
                        </ListItem>
                        <Divider variant='middle' />
                    </div>
                )
            })} */}


            <ListItem >
                <ListItemAvatar>
                    <Avatar alt='img' src='' />
                </ListItemAvatar>
                <ListItemText primary={`${productList[1].description || ''}`} secondary={`${productList[1].subDescription}` || ''} />
                <ListItemText primary={`$${productList[1].price || ''}`} />
                <Button className='Details' variant='outlined'>Details</Button>
            </ListItem>
            <Divider variant='middle' />



        </List>
    </StyledPaper>
);

export default CustomTopProduct;