/* eslint-disable @typescript-eslint/naming-convention */
import { createAction, props } from '@ngrx/store';

import { createErrorAction } from '../actions-util';
import { Speaker } from '../store.interfaces';

export const enum SpeakersActionTypes {
  LoadSpeakers = '[Speakers] Load Speakers',
  LoadSpeakersStarted = '[Speakers] Load Speakers Started',
  LoadSpeakersSuccess = '[Speakers] Load Speakers Success',
  LoadSpeakersError = '[Speakers] Load Speakers Error',
}

const loadSpeakers = createAction(SpeakersActionTypes.LoadSpeakers);
const loadSpeakersStarted = createAction(
  SpeakersActionTypes.LoadSpeakersStarted
);
const loadSpeakersError = createErrorAction(
  SpeakersActionTypes.LoadSpeakersError
);
const loadSpeakersSuccess = createAction(
  SpeakersActionTypes.LoadSpeakersSuccess,
  props<{ speakers: Speaker[] }>()
);

export const speakersActions = {
  loadSpeakers,
  loadSpeakersStarted,
  loadSpeakersError,
  loadSpeakersSuccess,
};
