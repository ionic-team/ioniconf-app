import { Session } from '../store.interfaces';

export const sessionsFeatureKey = 'sessions';

export interface SessionsState {
  sessionIds: number[];
  sessionsById: ById<Session>;
  loaded: boolean;
  loading: boolean;
  errorCode?: string;
  errorMessage?: string;
}
