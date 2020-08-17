import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://chf-avraham.myshopify.com'
});

const GET_ORDERS_URL = '/admin/api/2020-04/orders.json';


export const getOrdersRequest = () => {
    const url = `${GET_ORDERS_URL}`;
    return Axios.get(url);
}