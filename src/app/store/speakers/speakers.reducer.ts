import { createReducer, on } from '@ngrx/store';
import { speakersActions } from './speakers.actions';
import { initialState } from './speakers.state';

export const speakersReducer = createReducer(
  initialState,
  on(speakersActions.loadSpeakers, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(speakersActions.loadSpeakersStarted, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(speakersActions.loadSpeakersSuccess, (state, action) => ({
    ...state,
    // speakerIds: uniq(map(prop('id'), action.speakers)),
    speakerIds: [...new Set(action.speakers.map((s) => s.id))],
    // speakersById: arrayToObject(action.speakers, 'id'),
    speakersById: action.speakers.reduce(
      (next, speaker) => ({ ...next, [speaker.id]: speaker }),
      {}
    ),
    loading: false,
    loaded: true,
  })),
  on(speakersActions.loadSpeakersError, (state, error) => ({
    ...state,
    speakerIds: [],
    speakersById: {},
    loading: false,
    loaded: false,
    errorCode: error.code,
    errorMessage: error.message,
  }))
);
