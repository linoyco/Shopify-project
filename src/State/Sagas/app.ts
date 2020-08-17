import { take, call, put } from 'redux-saga/effects';
import { FETCH_DATA, SAVE_DATA } from '../Actions/App/types';

import * as Api from '../../Api';

function* fetchDataFlow() {
    try {
        const res = yield call(Api.getOrdersRequest);
        console.log(res.data);
        yield put({ type: SAVE_DATA, data: res.data });        
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchFetchData() {
    while (true) {
        yield take(FETCH_DATA);
        yield call(fetchDataFlow);
    }
};