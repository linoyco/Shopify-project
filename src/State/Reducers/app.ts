import produce from 'immer';

import { appActionType, SAVE_DATA } from '../Actions/App/types';
import { IOrdersObjApi } from '../../Api/ApiObjects';

export interface IAppState {
    data: Array<IOrdersObjApi>;
}

const initialState: IAppState = {
    data: []
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_DATA:
                draft.data = action.data;
                break;
        }
    });
}