import { SessionsState } from './sessions.interfaces';

export const initialState: SessionsState = {
  loaded: false,
  loading: false,
  sessionIds: [],
  sessionsById: {},
};
