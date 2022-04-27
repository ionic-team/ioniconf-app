import { Speaker } from '../store.interfaces';

export const speakersFeatureKey = 'speakers';

export interface SpeakersState {
  speakerIds: number[];
  speakersById: ById<Speaker>;
  loaded: boolean;
  loading: boolean;
  errorCode?: string;
  errorMessage?: string;
}
