import { Action } from '@ngrx/store';

export const LOAD_DATA = '[Monitoring] Load';
export const LOAD_DATA_SUCCESS = '[Monitoring] Load Success';
export const LOAD_DATA_FAIL = '[Monitoring] Load Fail';

/**
 * Load Data Actions
 */
export class LoadData implements Action {
    readonly type = LOAD_DATA;
}

export class LoadDataSuccess implements Action {
    readonly type = LOAD_DATA_SUCCESS;

    constructor(public payload: any[]) { }
}

export class LoadDataFail implements Action {
    readonly type = LOAD_DATA_FAIL;

    constructor(public payload: any) { }
}

// TO DO : add module actions 

// export a new type that represents the ctalog actions 
export type ActionType = LoadData | LoadDataSuccess | LoadDataFail;
