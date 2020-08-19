import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CustomChart from '../Components/CustomChart';
import CustomCard from '../Components/CustomCard';
import CustomTopProduct from '../Components/CustomTopProduct';

const StyledDiv = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    .ChartsDiv{
        display: flex;
        justify-content: space-between;
    }

    .MainDiv{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        margin-top: 1%;
    }
`;

export interface IUser {
    photo: string;
    fullName: string;
    total: string;
}

export interface IProduct {
    photo: string,
    description: string,
    subDescription: string,
    price: string,
    sold: string,
    stack: string
}

const HomePage: React.FunctionComponent = () => {

    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [productList, setProductList] = useState<IProduct[]>([]);

    const localData: Array<any> = useSelector((state: any) => state.app.data);

    const demoXY = [
        { x: 0, y: 0 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 6 },
        { x: 9, y: 0 }
    ];

    useEffect(() => {
        createUsersList();
        createProductList();
    }, [localData]);

    const createUsersList = async () => {
        let newList: IUser[] = [];
        let newUser: IUser = {
            fullName: '',
            photo: '',
            total: ''
        };

        localData.map(order => {
            newUser = {
                fullName: order.billing_address.name,
                total: order.total_price,
                photo: '',
            }
            newList.push(newUser);
        });

        let currentList: IUser[] = [];
        for (let i = 0; i < newList.length; i++) {
            let checkup: IUser | undefined = undefined;
            checkup = currentList.find(obj => { return obj.fullName === newList[i].fullName });

            if (checkup === undefined) {
                currentList.push(newList[i]);
            } else {
                currentList.map(user => {
                    if (user.fullName === checkup?.fullName)
                        user.total = `${parseInt(user.total) + parseInt(newList[i].total)}`;
                });
            }
        }
        setUsersList(currentList);
    }

    const createProductList = async () => {
        let newList: IProduct[] = [];
        let newProduct: IProduct = {
            photo: '',
            description: '',
            subDescription: '',
            price: '',
            sold: '',
            stack: ''
        };

        console.log('>>>>', localData);

        localData.map(order => {
            newProduct = {
                photo: '',
                description: order.line_items[0].title,
                subDescription: '',
                price: order.line_items[0].price,
                sold: '',
                stack: ''
            }
            newList.push(newProduct);
        });
        setProductList(newList);
    }

    return (
        <StyledDiv>
            <div className='MainDiv'>
                <div className='ChartsDiv'>
                    <CustomChart
                        xy={demoXY}
                        title='Sales'
                        total='5023'
                        color='red'
                    />
                    <CustomChart
                        title='Earn Money'
                        total='6326'
                        color='blue'
                    />
                    <CustomChart
                        title='Order'
                        total='4249'
                        color='green'
                    />
                </div>
                <div className='ChartsDiv'>
                    <CustomCard usersList={usersList} />
                    <CustomTopProduct productList={productList} />
                </div>
                <div>
                    <CustomChart
                        big={true}
                        title='Revenue'
                        color='#4ECAFE'
                    />
                </div>
            </div>
        </StyledDiv>
    );
}
export default HomePage;