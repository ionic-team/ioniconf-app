/* eslint-disable no-underscore-dangle */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Sponsor } from '../store.interfaces';
import { sponsorsFeatureKey, SponsorsState } from './sponsors.interfaces';

const getSponsorsState =
  createFeatureSelector<SponsorsState>(sponsorsFeatureKey);

// private selectors used to help build the sponsor list
const _allIds = createSelector(
  getSponsorsState,
  (state: SponsorsState) => state.sponsorIds
);
const _sponsorsById = createSelector(
  getSponsorsState,
  (state: SponsorsState) => state.sponsorsById
);

const getSponsors = createSelector(
  _allIds,
  _sponsorsById,
  (allIds: number[], byId: ById<Sponsor>) => allIds.map((id) => byId[id])
);

const getSponsorById = (id: number) =>
  createSelector(getSponsors, (sponsors: Sponsor[]) =>
    sponsors.find((s) => s.id === id)
  );

const sponsorsLoaded = createSelector(
  getSponsorsState,
  (state: SponsorsState) => state.loaded
);
const sponsorsLoading = createSelector(
  getSponsorsState,
  (state: SponsorsState) => state.loading
);

export const sponsorsQuery = {
  getSponsors,
  getSponsorById,
  sponsorsLoaded,
  sponsorsLoading,
};
