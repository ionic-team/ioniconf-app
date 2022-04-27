/* eslint-disable no-underscore-dangle */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Session } from '../store.interfaces';
import { sessionsFeatureKey, SessionsState } from './sessions.interfaces';

const getSessionsState =
  createFeatureSelector<SessionsState>(sessionsFeatureKey);

// private selectors used to help build the speaker list
const _allIds = createSelector(
  getSessionsState,
  (state: SessionsState) => state.sessionIds
);
const _sessionsById = createSelector(
  getSessionsState,
  (state: SessionsState) => state.sessionsById
);

const getSessions = createSelector(
  _allIds,
  _sessionsById,
  (allIds: number[], byId: ById<Session>) =>
    allIds
      .map((id) => byId[id])
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
);

const getSessionById = (id: number) =>
  createSelector(getSessions, (sessions: Session[]) =>
    sessions.find((s) => s.id === id)
  );

const sessionsLoaded = createSelector(
  getSessionsState,
  (state: SessionsState) => state.loaded
);
const sessionsLoading = createSelector(
  getSessionsState,
  (state: SessionsState) => state.loading
);

export const sessionsQuery = {
  getSessions,
  getSessionById,
  sessionsLoaded,
  sessionsLoading,
};
