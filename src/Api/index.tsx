import axios from 'axios';

const GET_ORDERS_URL = '/admin/api/2020-04/orders.json';
const username = '9b390ddee43f258b0503e063002b7f79';
const password = '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';

let Axios = axios.create({
    baseURL: 'https://chf-avraham.myshopify.com/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    auth: {
        username: username,
        password: password
    }
});

export const getOrdersRequest = () => {
    const url = `${GET_ORDERS_URL}`;
    console.log(url);

    return Axios.get(url).then((res: any) => {
        console.log(res);
    });
}