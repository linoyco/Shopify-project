//https://chf-avraham.myshopify.com/admin/api/2020-04/orders.json

export interface IOrdersObjApi {
    id: number,
    email: string,
    closed_at: null,
    created_at: string,
    updated_at: string,
    number: number,
    note: null,
    token: string,
    gateway: string,
    test: boolean,
    total_price: string,
    subtotal_price: string,
    total_weight: number,
    total_tax: string,
    taxes_included: boolean,
    currency: string,
    financial_status: string,
    confirmed: boolean,
    total_discounts: string,
    total_line_items_price: string,
    cart_token: string,
    buyer_accepts_marketing: false,
    name: string,
    referring_site: string,
    landing_site: string,
    cancelled_at: null,
    cancel_reason: null,
    total_price_usd: string,
    checkout_token: string,
    reference: string,
    user_id: null,
    location_id: null,
    source_identifier: string,
    source_url: null,
    processed_at: string,
    device_id: null,
    phone: string,
    customer_locale: null,
    app_id: null,
    browser_ip: string,
    landing_site_ref: string,
    order_number: number,
    discount_applications: Array<{
        type: string,
        value: string,
        value_type: string,
        allocation_method: string,
        target_selection: string,
        target_type: string,
        code: string
    }>,
    discount_codes: Array<{
        code: string,
        amount: string,
        type: string
    }>,
    note_attributes: Array<{
        name: string,
        value: string
    }>,
    payment_gateway_names: string[],
    processing_method: string,
    checkout_id: number,
    source_name: string,
    fulfillment_status: null,
    tax_lines: Array<{
        price: string,
        rate: number,
        title: string,
        price_set: {
            shop_money: {
                amount: string,
                currency_code: string
            },
            presentment_money: {
                amount: string,
                currency_code: string
            }
        }
    }>,
    tags: string,
    contact_email: string,
    order_status_url: string,
    presentment_currency: string,
    total_line_items_price_set: IMoneyObj,
    total_discounts_set: IMoneyObj,
    total_shipping_price_set: IMoneyObj,
    subtotal_price_set: IMoneyObj,
    total_price_set: IMoneyObj,
    total_tax_set: IMoneyObj,
    total_tip_received: string,
    original_total_duties_set: null,
    current_total_duties_set: null,
    admin_graphql_api_id: string,
    shipping_lines: Array<{
        id: number,
        title: string,
        price: string,
        code: string,
        source: string,
        phone: null,
        requested_fulfillment_service_id: null,
        delivery_category: null,
        carrier_identifier: null,
        discounted_price: string,
        price_set: IMoneyObj,
        discounted_price_set: IMoneyObj,
        discount_allocations: [],
        tax_lines: []
    }>,
    billing_address: IAddressObj,
    shipping_address: IAddressObj,
    client_details: {
        browser_ip: string,
        accept_language: null,
        user_agent: null,
        session_hash: null,
        browser_width: null,
        browser_height: null
    },
    payment_details: {
        credit_card_bin: null,
        avs_result_code: null,
        cvv_result_code: null,
        credit_card_number: string,
        credit_card_company: string
    },
    customer: {
        id: number,
        email: string,
        accepts_marketing: boolean,
        created_at: string,
        updated_at: string,
        first_name: string,
        last_name: string,
        orders_count: number,
        state: string,
        total_spent: string,
        last_order_id: number,
        note: null,
        verified_email: boolean,
        multipass_identifier: null,
        tax_exempt: boolean,
        phone: null,
        tags: string,
        last_order_name: string,
        currency: string,
        accepts_marketing_updated_at: string,
        marketing_opt_in_level: null,
        tax_exemptions: [],
        admin_graphql_api_id: string,
        default_address: {
            id: number,
            customer_id: number,
            first_name: null,
            last_name: null,
            company: null,
            address1: string,
            address2: string,
            city: string,
            province: string,
            country: string,
            zip: string,
            phone: string,
            name: string,
            province_code: string,
            country_code: string,
            country_name: string,
            default: boolean
        }
    },
    line_items: Array<ILineItemsObj>,
    fulfillments: Array<{
        id: number,
        order_id: number,
        status: string,
        created_at: string,
        service: string,
        updated_at: string,
        tracking_company: string,
        shipment_status: null,
        location_id: number,
        tracking_number: string,
        tracking_numbers: string[],
        tracking_url: string,
        tracking_urls: string[],
        receipt: {
            testcase: boolean,
            authorization: string
        },
        name: string,
        admin_graphql_api_id: string,
        line_items: Array<ILineItemsObj>
    }>,
    refunds: Array<{
        id: number,
        order_id: number,
        created_at: string,
        note: string,
        user_id: number,
        processed_at: string,
        restock: boolean,
        duties: [],
        admin_graphql_api_id: string,
        refund_line_items: Array<{
            id: number,
            quantity: number,
            line_item_id: number,
            location_id: number,
            restock_type: string,
            subtotal: number,
            total_tax: number,
            subtotal_set: IMoneyObj,
            total_tax_set: IMoneyObj,
            line_item: ILineItemsObj
        }>,
        transactions: Array<{
            id: number,
            order_id: number,
            kind: string,
            gateway: string,
            status: string,
            message: null,
            created_at: string,
            test: boolean,
            authorization: string,
            location_id: null,
            user_id: null,
            parent_id: number,
            processed_at: string,
            device_id: null,
            receipt: {},
            error_code: null,
            source_name: string,
            amount: string,
            currency: string,
            admin_graphql_api_id: string
        }>,
        order_adjustments: []
    }>
}

export interface IMoneyObj {
    shop_money: {
        amount: string,
        currency_code: string
    },
    presentment_money: {
        amount: string,
        currency_code: string
    }
}

export interface IAddressObj {
    first_name: string,
    address1: string,
    phone: string,
    city: string,
    zip: string,
    province: string,
    country: string,
    last_name: string,
    address2: string,
    company: null,
    latitude: number,
    longitude: number,
    name: string,
    country_code: string,
    province_code: string
}

export interface ILineItemsObj {
    id: number,
    variant_id: number,
    title: string,
    quantity: number,
    sku: string,
    variant_title: string,
    vendor: null,
    fulfillment_service: string,
    product_id: number,
    requires_shipping: boolean,
    taxable: boolean,
    gift_card: boolean,
    name: string,
    variant_inventory_management: string,
    properties: [
        {
            name: string,
            value: string
        },
        {
            name: string,
            value: string
        }
    ],
    product_exists: boolean,
    fulfillable_quantity: number,
    grams: number,
    price: string,
    total_discount: string,
    fulfillment_status: null,
    price_set: {
        shop_money: {
            amount: string,
            currency_code: string
        },
        presentment_money: {
            amount: string,
            currency_code: string
        }
    },
    total_discount_set: {
        shop_money: {
            amount: string,
            currency_code: string
        },
        presentment_money: {
            amount: string,
            currency_code: string
        }
    },
    discount_allocations: [
        {
            amount: string,
            discount_application_index: number,
            amount_set: {
                shop_money: {
                    amount: string,
                    currency_code: string
                },
                presentment_money: {
                    amount: string,
                    currency_code: string
                }
            }
        }
    ],
    duties: [],
    admin_graphql_api_id: string,
    tax_lines: [
        {
            title: string,
            price: string,
            rate: number,
            price_set: {
                shop_money: {
                    amount: string,
                    currency_code: string
                },
                presentment_money: {
                    amount: string,
                    currency_code: string
                }
            }
        }
    ]
}

// {
//     "orders": [
//         {
//             "id": 450789469,
//             "email": "bob.norman@hostmail.com",
//             "closed_at": null,
//             "created_at": "2008-01-10T11:00:00-05:00",
//             "updated_at": "2008-01-10T11:00:00-05:00",
//             "number": 1,
//             "note": null,
//             "token": "b1946ac92492d2347c6235b4d2611184",
//             "gateway": "authorize_net",
//             "test": false,
//             "total_price": "598.94",
//             "subtotal_price": "597.00",
//             "total_weight": 0,
//             "total_tax": "11.94",
//             "taxes_included": false,
//             "currency": "USD",
//             "financial_status": "partially_refunded",
//             "confirmed": true,
//             "total_discounts": "10.00",
//             "total_line_items_price": "597.00",
//             "cart_token": "68778783ad298f1c80c3bafcddeea02f",
//             "buyer_accepts_marketing": false,
//             "name": "#1001",
//             "referring_site": "http://www.otherexample.com",
//             "landing_site": "http://www.example.com?source=abc",
//             "cancelled_at": null,
//             "cancel_reason": null,
//             "total_price_usd": "598.94",
//             "checkout_token": "bd5a8aa1ecd019dd3520ff791ee3a24c",
//             "reference": "fhwdgads",
//             "user_id": null,
//             "location_id": null,
//             "source_identifier": "fhwdgads",
//             "source_url": null,
//             "processed_at": "2008-01-10T11:00:00-05:00",
//             "device_id": null,
//             "phone": "+557734881234",
//             "customer_locale": null,
//             "app_id": null,
//             "browser_ip": "0.0.0.0",
//             "landing_site_ref": "abc",
//             "order_number": 1001,
//             "discount_applications": [
//                 {
//                     "type": "discount_code",
//                     "value": "10.0",
//                     "value_type": "fixed_amount",
//                     "allocation_method": "across",
//                     "target_selection": "all",
//                     "target_type": "line_item",
//                     "code": "TENOFF"
//                 }
//             ],
//             "discount_codes": [
//                 {
//                     "code": "TENOFF",
//                     "amount": "10.00",
//                     "type": "fixed_amount"
//                 }
//             ],
//             "note_attributes": [
//                 {
//                     "name": "custom engraving",
//                     "value": "Happy Birthday"
//                 },
//                 {
//                     "name": "colour",
//                     "value": "green"
//                 }
//             ],
//             "payment_gateway_names": [
//                 "bogus"
//             ],
//             "processing_method": "direct",
//             "checkout_id": 901414060,
//             "source_name": "web",
//             "fulfillment_status": null,
//             "tax_lines": [
//                 {
//                     "price": "11.94",
//                     "rate": 0.06,
//                     "title": "State Tax",
//                     "price_set": {
//                         "shop_money": {
//                             "amount": "11.94",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "11.94",
//                             "currency_code": "USD"
//                         }
//                     }
//                 }
//             ],
//             "tags": "",
//             "contact_email": "bob.norman@hostmail.com",
//             "order_status_url": "https://apple.myshopify.com/690933842/orders/b1946ac92492d2347c6235b4d2611184/authenticate?key=a668e671ba9b8bb13c3666ce5aaeda3c",
//             "presentment_currency": "USD",
//             "total_line_items_price_set": {
//                 "shop_money": {
//                     "amount": "597.00",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "597.00",
//                     "currency_code": "USD"
//                 }
//             },
//             "total_discounts_set": {
//                 "shop_money": {
//                     "amount": "10.00",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "10.00",
//                     "currency_code": "USD"
//                 }
//             },
//             "total_shipping_price_set": {
//                 "shop_money": {
//                     "amount": "0.00",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "0.00",
//                     "currency_code": "USD"
//                 }
//             },
//             "subtotal_price_set": {
//                 "shop_money": {
//                     "amount": "597.00",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "597.00",
//                     "currency_code": "USD"
//                 }
//             },
//             "total_price_set": {
//                 "shop_money": {
//                     "amount": "598.94",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "598.94",
//                     "currency_code": "USD"
//                 }
//             },
//             "total_tax_set": {
//                 "shop_money": {
//                     "amount": "11.94",
//                     "currency_code": "USD"
//                 },
//                 "presentment_money": {
//                     "amount": "11.94",
//                     "currency_code": "USD"
//                 }
//             },
//             "total_tip_received": "0.0",
//             "original_total_duties_set": null,
//             "current_total_duties_set": null,
//             "admin_graphql_api_id": "gid://shopify/Order/450789469",
//             "shipping_lines": [
//                 {
//                     "id": 369256396,
//                     "title": "Free Shipping",
//                     "price": "0.00",
//                     "code": "Free Shipping",
//                     "source": "shopify",
//                     "phone": null,
//                     "requested_fulfillment_service_id": null,
//                     "delivery_category": null,
//                     "carrier_identifier": null,
//                     "discounted_price": "0.00",
//                     "price_set": {
//                         "shop_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "discounted_price_set": {
//                         "shop_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "discount_allocations": [],
//                     "tax_lines": []
//                 }
//             ],
//             "billing_address": {
//                 "first_name": "Bob",
//                 "address1": "Chestnut Street 92",
//                 "phone": "555-625-1199",
//                 "city": "Louisville",
//                 "zip": "40202",
//                 "province": "Kentucky",
//                 "country": "United States",
//                 "last_name": "Norman",
//                 "address2": "",
//                 "company": null,
//                 "latitude": 45.41634,
//                 "longitude": -75.6868,
//                 "name": "Bob Norman",
//                 "country_code": "US",
//                 "province_code": "KY"
//             },
//             "shipping_address": {
//                 "first_name": "Bob",
//                 "address1": "Chestnut Street 92",
//                 "phone": "555-625-1199",
//                 "city": "Louisville",
//                 "zip": "40202",
//                 "province": "Kentucky",
//                 "country": "United States",
//                 "last_name": "Norman",
//                 "address2": "",
//                 "company": null,
//                 "latitude": 45.41634,
//                 "longitude": -75.6868,
//                 "name": "Bob Norman",
//                 "country_code": "US",
//                 "province_code": "KY"
//             },
//             "client_details": {
//                 "browser_ip": "0.0.0.0",
//                 "accept_language": null,
//                 "user_agent": null,
//                 "session_hash": null,
//                 "browser_width": null,
//                 "browser_height": null
//             },
//             "payment_details": {
//                 "credit_card_bin": null,
//                 "avs_result_code": null,
//                 "cvv_result_code": null,
//                 "credit_card_number": "•••• •••• •••• 4242",
//                 "credit_card_company": "Visa"
//             },
//             "customer": {
//                 "id": 207119551,
//                 "email": "bob.norman@hostmail.com",
//                 "accepts_marketing": false,
//                 "created_at": "2020-07-23T17:17:25-04:00",
//                 "updated_at": "2020-07-23T17:17:25-04:00",
//                 "first_name": "Bob",
//                 "last_name": "Norman",
//                 "orders_count": 1,
//                 "state": "disabled",
//                 "total_spent": "199.65",
//                 "last_order_id": 450789469,
//                 "note": null,
//                 "verified_email": true,
//                 "multipass_identifier": null,
//                 "tax_exempt": false,
//                 "phone": null,
//                 "tags": "",
//                 "last_order_name": "#1001",
//                 "currency": "USD",
//                 "accepts_marketing_updated_at": "2005-06-12T11:57:11-04:00",
//                 "marketing_opt_in_level": null,
//                 "tax_exemptions": [],
//                 "admin_graphql_api_id": "gid://shopify/Customer/207119551",
//                 "default_address": {
//                     "id": 207119551,
//                     "customer_id": 207119551,
//                     "first_name": null,
//                     "last_name": null,
//                     "company": null,
//                     "address1": "Chestnut Street 92",
//                     "address2": "",
//                     "city": "Louisville",
//                     "province": "Kentucky",
//                     "country": "United States",
//                     "zip": "40202",
//                     "phone": "555-625-1199",
//                     "name": "",
//                     "province_code": "KY",
//                     "country_code": "US",
//                     "country_name": "United States",
//                     "default": true
//                 }
//             },
//             "line_items": [
//                 {
//                     "id": 466157049,
//                     "variant_id": 39072856,
//                     "title": "IPod Nano - 8gb",
//                     "quantity": 1,
//                     "sku": "IPOD2008GREEN",
//                     "variant_title": "green",
//                     "vendor": null,
//                     "fulfillment_service": "manual",
//                     "product_id": 632910392,
//                     "requires_shipping": true,
//                     "taxable": true,
//                     "gift_card": false,
//                     "name": "IPod Nano - 8gb - green",
//                     "variant_inventory_management": "shopify",
//                     "properties": [
//                         {
//                             "name": "Custom Engraving Front",
//                             "value": "Happy Birthday"
//                         },
//                         {
//                             "name": "Custom Engraving Back",
//                             "value": "Merry Christmas"
//                         }
//                     ],
//                     "product_exists": true,
//                     "fulfillable_quantity": 1,
//                     "grams": 200,
//                     "price": "199.00",
//                     "total_discount": "0.00",
//                     "fulfillment_status": null,
//                     "price_set": {
//                         "shop_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "total_discount_set": {
//                         "shop_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "discount_allocations": [
//                         {
//                             "amount": "3.34",
//                             "discount_application_index": 0,
//                             "amount_set": {
//                                 "shop_money": {
//                                     "amount": "3.34",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.34",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ],
//                     "duties": [],
//                     "admin_graphql_api_id": "gid://shopify/LineItem/466157049",
//                     "tax_lines": [
//                         {
//                             "title": "State Tax",
//                             "price": "3.98",
//                             "rate": 0.06,
//                             "price_set": {
//                                 "shop_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     "id": 518995019,
//                     "variant_id": 49148385,
//                     "title": "IPod Nano - 8gb",
//                     "quantity": 1,
//                     "sku": "IPOD2008RED",
//                     "variant_title": "red",
//                     "vendor": null,
//                     "fulfillment_service": "manual",
//                     "product_id": 632910392,
//                     "requires_shipping": true,
//                     "taxable": true,
//                     "gift_card": false,
//                     "name": "IPod Nano - 8gb - red",
//                     "variant_inventory_management": "shopify",
//                     "properties": [],
//                     "product_exists": true,
//                     "fulfillable_quantity": 1,
//                     "grams": 200,
//                     "price": "199.00",
//                     "total_discount": "0.00",
//                     "fulfillment_status": null,
//                     "price_set": {
//                         "shop_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "total_discount_set": {
//                         "shop_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "discount_allocations": [
//                         {
//                             "amount": "3.33",
//                             "discount_application_index": 0,
//                             "amount_set": {
//                                 "shop_money": {
//                                     "amount": "3.33",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.33",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ],
//                     "duties": [],
//                     "admin_graphql_api_id": "gid://shopify/LineItem/518995019",
//                     "tax_lines": [
//                         {
//                             "title": "State Tax",
//                             "price": "3.98",
//                             "rate": 0.06,
//                             "price_set": {
//                                 "shop_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     "id": 703073504,
//                     "variant_id": 457924702,
//                     "title": "IPod Nano - 8gb",
//                     "quantity": 1,
//                     "sku": "IPOD2008BLACK",
//                     "variant_title": "black",
//                     "vendor": null,
//                     "fulfillment_service": "manual",
//                     "product_id": 632910392,
//                     "requires_shipping": true,
//                     "taxable": true,
//                     "gift_card": false,
//                     "name": "IPod Nano - 8gb - black",
//                     "variant_inventory_management": "shopify",
//                     "properties": [],
//                     "product_exists": true,
//                     "fulfillable_quantity": 1,
//                     "grams": 200,
//                     "price": "199.00",
//                     "total_discount": "0.00",
//                     "fulfillment_status": null,
//                     "price_set": {
//                         "shop_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "199.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "total_discount_set": {
//                         "shop_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         },
//                         "presentment_money": {
//                             "amount": "0.00",
//                             "currency_code": "USD"
//                         }
//                     },
//                     "discount_allocations": [
//                         {
//                             "amount": "3.33",
//                             "discount_application_index": 0,
//                             "amount_set": {
//                                 "shop_money": {
//                                     "amount": "3.33",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.33",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ],
//                     "duties": [],
//                     "admin_graphql_api_id": "gid://shopify/LineItem/703073504",
//                     "tax_lines": [
//                         {
//                             "title": "State Tax",
//                             "price": "3.98",
//                             "rate": 0.06,
//                             "price_set": {
//                                 "shop_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "fulfillments": [
//                 {
//                     "id": 255858046,
//                     "order_id": 450789469,
//                     "status": "failure",
//                     "created_at": "2020-07-23T17:17:25-04:00",
//                     "service": "manual",
//                     "updated_at": "2020-07-23T17:17:25-04:00",
//                     "tracking_company": "USPS",
//                     "shipment_status": null,
//                     "location_id": 905684977,
//                     "tracking_number": "1Z2345",
//                     "tracking_numbers": [
//                         "1Z2345"
//                     ],
//                     "tracking_url": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z2345",
//                     "tracking_urls": [
//                         "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1Z2345"
//                     ],
//                     "receipt": {
//                         "testcase": true,
//                         "authorization": "123456"
//                     },
//                     "name": "#1001.0",
//                     "admin_graphql_api_id": "gid://shopify/Fulfillment/255858046",
//                     "line_items": [
//                         {
//                             "id": 466157049,
//                             "variant_id": 39072856,
//                             "title": "IPod Nano - 8gb",
//                             "quantity": 1,
//                             "sku": "IPOD2008GREEN",
//                             "variant_title": "green",
//                             "vendor": null,
//                             "fulfillment_service": "manual",
//                             "product_id": 632910392,
//                             "requires_shipping": true,
//                             "taxable": true,
//                             "gift_card": false,
//                             "name": "IPod Nano - 8gb - green",
//                             "variant_inventory_management": "shopify",
//                             "properties": [
//                                 {
//                                     "name": "Custom Engraving Front",
//                                     "value": "Happy Birthday"
//                                 },
//                                 {
//                                     "name": "Custom Engraving Back",
//                                     "value": "Merry Christmas"
//                                 }
//                             ],
//                             "product_exists": true,
//                             "fulfillable_quantity": 1,
//                             "grams": 200,
//                             "price": "199.00",
//                             "total_discount": "0.00",
//                             "fulfillment_status": null,
//                             "price_set": {
//                                 "shop_money": {
//                                     "amount": "199.00",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "199.00",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "total_discount_set": {
//                                 "shop_money": {
//                                     "amount": "0.00",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "0.00",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "discount_allocations": [
//                                 {
//                                     "amount": "3.34",
//                                     "discount_application_index": 0,
//                                     "amount_set": {
//                                         "shop_money": {
//                                             "amount": "3.34",
//                                             "currency_code": "USD"
//                                         },
//                                         "presentment_money": {
//                                             "amount": "3.34",
//                                             "currency_code": "USD"
//                                         }
//                                     }
//                                 }
//                             ],
//                             "duties": [],
//                             "admin_graphql_api_id": "gid://shopify/LineItem/466157049",
//                             "tax_lines": [
//                                 {
//                                     "title": "State Tax",
//                                     "price": "3.98",
//                                     "rate": 0.06,
//                                     "price_set": {
//                                         "shop_money": {
//                                             "amount": "3.98",
//                                             "currency_code": "USD"
//                                         },
//                                         "presentment_money": {
//                                             "amount": "3.98",
//                                             "currency_code": "USD"
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "refunds": [
//                 {
//                     "id": 509562969,
//                     "order_id": 450789469,
//                     "created_at": "2020-07-23T17:17:25-04:00",
//                     "note": "it broke during shipping",
//                     "user_id": 799407056,
//                     "processed_at": "2020-07-23T17:17:25-04:00",
//                     "restock": true,
//                     "duties": [],
//                     "admin_graphql_api_id": "gid://shopify/Refund/509562969",
//                     "refund_line_items": [
//                         {
//                             "id": 104689539,
//                             "quantity": 1,
//                             "line_item_id": 703073504,
//                             "location_id": 487838322,
//                             "restock_type": "legacy_restock",
//                             "subtotal": 195.67,
//                             "total_tax": 3.98,
//                             "subtotal_set": {
//                                 "shop_money": {
//                                     "amount": "195.67",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "195.67",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "total_tax_set": {
//                                 "shop_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "line_item": {
//                                 "id": 703073504,
//                                 "variant_id": 457924702,
//                                 "title": "IPod Nano - 8gb",
//                                 "quantity": 1,
//                                 "sku": "IPOD2008BLACK",
//                                 "variant_title": "black",
//                                 "vendor": null,
//                                 "fulfillment_service": "manual",
//                                 "product_id": 632910392,
//                                 "requires_shipping": true,
//                                 "taxable": true,
//                                 "gift_card": false,
//                                 "name": "IPod Nano - 8gb - black",
//                                 "variant_inventory_management": "shopify",
//                                 "properties": [],
//                                 "product_exists": true,
//                                 "fulfillable_quantity": 1,
//                                 "grams": 200,
//                                 "price": "199.00",
//                                 "total_discount": "0.00",
//                                 "fulfillment_status": null,
//                                 "price_set": {
//                                     "shop_money": {
//                                         "amount": "199.00",
//                                         "currency_code": "USD"
//                                     },
//                                     "presentment_money": {
//                                         "amount": "199.00",
//                                         "currency_code": "USD"
//                                     }
//                                 },
//                                 "total_discount_set": {
//                                     "shop_money": {
//                                         "amount": "0.00",
//                                         "currency_code": "USD"
//                                     },
//                                     "presentment_money": {
//                                         "amount": "0.00",
//                                         "currency_code": "USD"
//                                     }
//                                 },
//                                 "discount_allocations": [
//                                     {
//                                         "amount": "3.33",
//                                         "discount_application_index": 0,
//                                         "amount_set": {
//                                             "shop_money": {
//                                                 "amount": "3.33",
//                                                 "currency_code": "USD"
//                                             },
//                                             "presentment_money": {
//                                                 "amount": "3.33",
//                                                 "currency_code": "USD"
//                                             }
//                                         }
//                                     }
//                                 ],
//                                 "duties": [],
//                                 "admin_graphql_api_id": "gid://shopify/LineItem/703073504",
//                                 "tax_lines": [
//                                     {
//                                         "title": "State Tax",
//                                         "price": "3.98",
//                                         "rate": 0.06,
//                                         "price_set": {
//                                             "shop_money": {
//                                                 "amount": "3.98",
//                                                 "currency_code": "USD"
//                                             },
//                                             "presentment_money": {
//                                                 "amount": "3.98",
//                                                 "currency_code": "USD"
//                                             }
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "id": 709875399,
//                             "quantity": 1,
//                             "line_item_id": 466157049,
//                             "location_id": 487838322,
//                             "restock_type": "legacy_restock",
//                             "subtotal": 195.66,
//                             "total_tax": 3.98,
//                             "subtotal_set": {
//                                 "shop_money": {
//                                     "amount": "195.66",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "195.66",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "total_tax_set": {
//                                 "shop_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 },
//                                 "presentment_money": {
//                                     "amount": "3.98",
//                                     "currency_code": "USD"
//                                 }
//                             },
//                             "line_item": {
//                                 "id": 466157049,
//                                 "variant_id": 39072856,
//                                 "title": "IPod Nano - 8gb",
//                                 "quantity": 1,
//                                 "sku": "IPOD2008GREEN",
//                                 "variant_title": "green",
//                                 "vendor": null,
//                                 "fulfillment_service": "manual",
//                                 "product_id": 632910392,
//                                 "requires_shipping": true,
//                                 "taxable": true,
//                                 "gift_card": false,
//                                 "name": "IPod Nano - 8gb - green",
//                                 "variant_inventory_management": "shopify",
//                                 "properties": [
//                                     {
//                                         "name": "Custom Engraving Front",
//                                         "value": "Happy Birthday"
//                                     },
//                                     {
//                                         "name": "Custom Engraving Back",
//                                         "value": "Merry Christmas"
//                                     }
//                                 ],
//                                 "product_exists": true,
//                                 "fulfillable_quantity": 1,
//                                 "grams": 200,
//                                 "price": "199.00",
//                                 "total_discount": "0.00",
//                                 "fulfillment_status": null,
//                                 "price_set": {
//                                     "shop_money": {
//                                         "amount": "199.00",
//                                         "currency_code": "USD"
//                                     },
//                                     "presentment_money": {
//                                         "amount": "199.00",
//                                         "currency_code": "USD"
//                                     }
//                                 },
//                                 "total_discount_set": {
//                                     "shop_money": {
//                                         "amount": "0.00",
//                                         "currency_code": "USD"
//                                     },
//                                     "presentment_money": {
//                                         "amount": "0.00",
//                                         "currency_code": "USD"
//                                     }
//                                 },
//                                 "discount_allocations": [
//                                     {
//                                         "amount": "3.34",
//                                         "discount_application_index": 0,
//                                         "amount_set": {
//                                             "shop_money": {
//                                                 "amount": "3.34",
//                                                 "currency_code": "USD"
//                                             },
//                                             "presentment_money": {
//                                                 "amount": "3.34",
//                                                 "currency_code": "USD"
//                                             }
//                                         }
//                                     }
//                                 ],
//                                 "duties": [],
//                                 "admin_graphql_api_id": "gid://shopify/LineItem/466157049",
//                                 "tax_lines": [
//                                     {
//                                         "title": "State Tax",
//                                         "price": "3.98",
//                                         "rate": 0.06,
//                                         "price_set": {
//                                             "shop_money": {
//                                                 "amount": "3.98",
//                                                 "currency_code": "USD"
//                                             },
//                                             "presentment_money": {
//                                                 "amount": "3.98",
//                                                 "currency_code": "USD"
//                                             }
//                                         }
//                                     }
//                                 ]
//                             }
//                         }
//                     ],
//                     "transactions": [
//                         {
//                             "id": 179259969,
//                             "order_id": 450789469,
//                             "kind": "refund",
//                             "gateway": "bogus",
//                             "status": "success",
//                             "message": null,
//                             "created_at": "2005-08-05T12:59:12-04:00",
//                             "test": false,
//                             "authorization": "authorization-key",
//                             "location_id": null,
//                             "user_id": null,
//                             "parent_id": 801038806,
//                             "processed_at": "2005-08-05T12:59:12-04:00",
//                             "device_id": null,
//                             "receipt": {},
//                             "error_code": null,
//                             "source_name": "web",
//                             "amount": "209.00",
//                             "currency": "USD",
//                             "admin_graphql_api_id": "gid://shopify/OrderTransaction/179259969"
//                         }
//                     ],
//                     "order_adjustments": []
//                 }
//             ]
//         }
//     ]
// }