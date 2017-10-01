// TO DO : 
// - Define the state interface and the initial state of monitoring module

import * as monitoringActions from './../actions/monitoring.actions';

export interface State {
    measurements: any | null;
    from: string | null;
    to: string | null;
    loading: boolean;
}

// initial state of the monitoring module
export const initialState: State = {
    measurements: null,
    from: null,
    to: null,
    loading: false
}

// reducer function for monitoring feature module
export function reducer(state = initialState, action: monitoringActions.ActionType) {
    switch (action.type) {
        case monitoringActions.LOAD_DATA:
            return {...state, from: action.payload.from, to: action.payload.to, loading: true }
        case monitoringActions.LOAD_DATA_SUCCESS:
            return {...state, measurements: action.payload, loading: false }
        default:
            return state;
    }
}

// reference to state properties
export const getMeasurements = (state: State) => state.measurements;
export const getLoading = (state: State) => state.loading;
export const getFromDate = (state: State) => state.from;
export const getToDate = (state: State) => state.to;


