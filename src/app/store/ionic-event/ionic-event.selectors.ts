import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ionicEventFeatureKey,
  IonicEventState,
} from './ionic-event.interfaces';

const getEventState =
  createFeatureSelector<IonicEventState>(ionicEventFeatureKey);

const getEvent = createSelector(
  getEventState,
  (state: IonicEventState) => state.event
);

const eventLoaded = createSelector(
  getEventState,
  (state: IonicEventState) => state.loaded
);

const eventLoading = createSelector(
  getEventState,
  (state: IonicEventState) => state.loading
);

export const eventQuery = {
  getEvent,
  eventLoaded,
  eventLoading,
};
