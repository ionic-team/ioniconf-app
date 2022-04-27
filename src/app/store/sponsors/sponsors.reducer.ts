import { createReducer, on } from '@ngrx/store';
import { sponsorsActions } from './sponsors.actions';
import { initialState } from './sponsors.state';

export const sponsorsReducer = createReducer(
  initialState,
  on(sponsorsActions.loadSponsors, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(sponsorsActions.loadSponsorsStarted, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(sponsorsActions.loadSponsorsSuccess, (state, action) => ({
    ...state,
    sponsorIds: [...new Set(action.sponsors.map((s) => s.id))],
    sponsorsById: action.sponsors.reduce(
      (next, sponsor) => ({ ...next, [sponsor.id]: sponsor }),
      {}
    ),
    loading: false,
    loaded: true,
  })),
  on(sponsorsActions.loadSponsorsError, (state, error) => ({
    ...state,
    sponsorIds: [],
    sponsorsById: {},
    loading: false,
    loaded: false,
    errorCode: error.code,
    errorMessage: error.message,
  }))
);
