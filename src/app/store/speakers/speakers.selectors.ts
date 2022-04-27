/* eslint-disable no-underscore-dangle */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Speaker } from '../store.interfaces';

import { speakersFeatureKey, SpeakersState } from './speakers.interfaces';

const getSpeakersState =
  createFeatureSelector<SpeakersState>(speakersFeatureKey);

// private selectors used to help build the speaker list
const _allIds = createSelector(
  getSpeakersState,
  (state: SpeakersState) => state.speakerIds
);
const _speakersById = createSelector(
  getSpeakersState,
  (state: SpeakersState) => state.speakersById
);

const getSpeakers = createSelector(
  _allIds,
  _speakersById,
  (allIds: number[], byId: ById<Speaker>) =>
    (allIds || [])
      .map((id) => byId[id])
      .sort((a, b) =>
        a.fullName.toLocaleLowerCase() > b.fullName.toLocaleLowerCase() ? 1 : -1
      )
);

const getSpeakerById = (id: number) =>
  createSelector(getSpeakers, (speakers: Speaker[]) =>
    speakers.find((s) => s.id === id)
  );

const speakersLoaded = createSelector(
  getSpeakersState,
  (state: SpeakersState) => state.loaded
);
const speakersLoading = createSelector(
  getSpeakersState,
  (state: SpeakersState) => state.loading
);

export const speakersQuery = {
  getSpeakers,
  getSpeakerById,
  speakersLoaded,
  speakersLoading,
};
