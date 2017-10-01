import { createFeatureSelector, createSelector } from '@ngrx/store';
// TO DO : export module reducers and selectors

import * as monitoringActions from './../actions/monitoring.actions';
import * as fromMonitoring from './monitoring';
import * as fromRoot from './../../core/reducers'

export interface MonitoringState {
    measurements: fromMonitoring.State;
}

// The current state will be updated when we 
// add new features to the monitoring module
// For now the state has one propoerty related to 
// the state of measurements
export interface State extends fromRoot.State {
    monitoring:MonitoringState
}

export const reducers = {
    measurements: fromMonitoring.reducer
}

// selector to get the piece of state responsible of monitoring measurements
export const getFeatureState = createFeatureSelector<MonitoringState>('monitoring');

// get the measurements slice
export const getMonitoring = createSelector(
    getFeatureState,
    (state:MonitoringState) => state.measurements
)

// select the measurement data 
export const getMeasurementsData = createSelector(
    getMonitoring,
    fromMonitoring.getMeasurements
);

// select the loading property from the state
export const getLoading = createSelector(
    getMonitoring,
    fromMonitoring.getLoading
);

// select the loading property from the state
export const getFromDate = createSelector(
    getMonitoring,
    fromMonitoring.getFromDate
);

// select the loading property from the state
export const getToDate = createSelector(
    getMonitoring,
    fromMonitoring.getToDate
);