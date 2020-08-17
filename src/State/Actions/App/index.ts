import * as AppActions from './types';

export function fetchData(): AppActions.IFetchData {
    return {
        type: AppActions.FETCH_DATA,
    }
}