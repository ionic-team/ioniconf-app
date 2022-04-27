import { SpeakersState } from './speakers.interfaces';

export const initialState: SpeakersState = {
  loaded: false,
  loading: false,
  speakerIds: [],
  speakersById: {},
};
