/* eslint-disable @typescript-eslint/naming-convention */
import { createAction, props } from '@ngrx/store';
import { createErrorAction } from '../actions-util';
import { Session } from '../store.interfaces';

export const enum SessionsActionTypes {
  LoadSessions = '[Sessions] Load Sessions',
  LoadSessionsStarted = '[Sessions] Load Sessions Started',
  LoadSessionsSuccess = '[Sessions] Load Sessions Success',
  LoadSessionsError = '[Sessions] Load Sessions Error',
}

const loadSessions = createAction(SessionsActionTypes.LoadSessions);
const loadSessionsStarted = createAction(
  SessionsActionTypes.LoadSessionsStarted
);
const loadSessionsError = createErrorAction(
  SessionsActionTypes.LoadSessionsError
);
const loadSessionsSuccess = createAction(
  SessionsActionTypes.LoadSessionsSuccess,
  props<{ sessions: Session[] }>()
);

export const sessionsActions = {
  loadSessions,
  loadSessionsStarted,
  loadSessionsError,
  loadSessionsSuccess,
};
