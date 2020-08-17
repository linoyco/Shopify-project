import { IOrdersObjApi } from "../../../Api/ApiObjects";

export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';

export interface IFetchData {
    type: typeof FETCH_DATA;
}

export interface ISaveData {
    type: typeof SAVE_DATA;
    data: Array<IOrdersObjApi>;
}

export type appActionType = IFetchData
    | ISaveData;
