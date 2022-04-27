/* eslint-disable @typescript-eslint/naming-convention */
import { createAction, props } from '@ngrx/store';
import { createErrorAction } from '../actions-util';
import { Sponsor } from '../store.interfaces';

export const enum SponsorsActionTypes {
  LoadSponsors = '[Sponsors] Load Sponsors',
  LoadSponsorsStarted = '[Sponsors] Load Sponsors Started',
  LoadSponsorsSuccess = '[Sponsors] Load Sponsors Success',
  LoadSponsorsError = '[Sponsors] Load Sponsors Error',
}

const loadSponsors = createAction(SponsorsActionTypes.LoadSponsors);
const loadSponsorsStarted = createAction(
  SponsorsActionTypes.LoadSponsorsStarted
);
const loadSponsorsError = createErrorAction(
  SponsorsActionTypes.LoadSponsorsError
);
const loadSponsorsSuccess = createAction(
  SponsorsActionTypes.LoadSponsorsSuccess,
  props<{ sponsors: Sponsor[] }>()
);

export const sponsorsActions = {
  loadSponsors,
  loadSponsorsStarted,
  loadSponsorsError,
  loadSponsorsSuccess,
};
