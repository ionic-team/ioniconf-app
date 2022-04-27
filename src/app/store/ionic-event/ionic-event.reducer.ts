import { createReducer, on } from '@ngrx/store';
import { eventActions } from './ionic-event.actions';
import { initialState } from './ionic-event.state';

export const eventReducer = createReducer(
  initialState,
  on(eventActions.loadEvent, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(eventActions.loadEventStarted, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(eventActions.loadEventSuccess, (state, action) => ({
    ...state,
    event: action.event,
    loading: false,
    loaded: true,
  })),
  on(eventActions.loadEventError, (state, error) => ({
    ...state,
    loading: false,
    loaded: false,
    errorCode: error.code,
    errorMessage: error.message,
  }))
);
