import * as AppActions from './types';
import { IOrdersObjApi } from '../../../Api/ApiObjects';

export function fetchData(): AppActions.IFetchData {
    return {
        type: AppActions.FETCH_DATA,
    }
}

export function saveData(data: Array<IOrdersObjApi>): AppActions.ISaveData {
    return {
        type: AppActions.SAVE_DATA,
        data: data
    }
}