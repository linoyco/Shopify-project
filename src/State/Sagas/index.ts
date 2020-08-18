import { all } from 'redux-saga/effects';

import { watchFetchData } from './app';

export default function* rootSaga() {
	yield all([
		// watchFetchData()
	]);
}