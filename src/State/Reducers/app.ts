import produce from 'immer';

import { appActionType, SAVE_DATA } from '../Actions/App/types';

export interface IAppState {
    data: Array<any>;
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