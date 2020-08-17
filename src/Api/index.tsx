import axios from 'axios';

const GET_ORDERS_URL = '/admin/api/2020-04/orders.json';
const username = '9b390ddee43f258b0503e063002b7f79';
const password = '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';

const Axios = axios.create({
    baseURL: 'https://chf-avraham.myshopify.com',
    auth: {
        username: username,
        password: password
    }
});


// export const getOrdersRequest = () => {
//     // const url = `${GET_ORDERS_URL}`;
//     const url = 'https://9b390ddee43f258b0503e063002b7f79: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@chf-avraham.myshopify.com/admin/api/2020-04/orders.json';
//     return Axios.get(url);
// }

export const getOrdersRequest = () => {
    const url = `${GET_ORDERS_URL}`;
    return Axios.get(url);
}




const URL = 'https://9b390ddee43f258b0503e063002b7f79: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@chf-avraham.myshopify.com/admin/api/2020-04/orders.json';

// export const getOrdersRequest = () => {
//     fetch(URL)
//         .then(data => { return data.json() })
//         .then(res => { console.log(res); })
// }


// export const getOrdersRequest = async () => {
//     const response = await fetch(URL);
//     const myJson = await response.json(); 
//     console.log(myJson);
//   }



// const URL = 'https://chf-avraham.myshopify.com/admin/api/2020-04/orders.json';

// const Http = new XMLHttpRequest();

// export const getOrdersRequest = async () => {
//     Http.open('GET', URL);
//     Http.withCredentials = true;
//     Http.send();
//     Http.onreadystatechange = (e: any) => {
//         console.log(Http.responseText);
//     }
// }


// export const getOrdersRequest = async () => {
//     Http.open('GET', URL, true, Username, Password);
//     Http.withCredentials = true;
//     Http.send();
//     Http.onreadystatechange = (e: any) => {
//         console.log(Http.responseText);
//     }
// }





// const headers = new Headers();

// headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

// export const getOrdersRequest = async () => {
//     fetch('https://chf-avraham.myshopify.com/admin/api/2020-04/orders.json', { headers: headers })
//         .then(response => response.json())
//         .then(data => console.log(data));
// }