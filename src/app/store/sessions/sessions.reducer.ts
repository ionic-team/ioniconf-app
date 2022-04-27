import { createReducer, on } from '@ngrx/store';
import { sessionsActions } from './sessions.actions';
import { initialState } from './sessions.state';

export const sessionsReducer = createReducer(
  initialState,
  on(sessionsActions.loadSessions, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(sessionsActions.loadSessionsStarted, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(sessionsActions.loadSessionsSuccess, (state, action) => ({
    ...state,
    sessionIds: [...new Set(action.sessions.map((s) => s.id))],
    sessionsById: action.sessions.reduce(
      (next, session) => ({ ...next, [session.id]: session }),
      {}
    ),
    loading: false,
    loaded: true,
  })),
  on(sessionsActions.loadSessionsError, (state, error) => ({
    ...state,
    sessionIds: [],
    sessionsById: {},
    loading: false,
    loaded: false,
    errorCode: error.code,
    errorMessage: error.message,
  }))
);
