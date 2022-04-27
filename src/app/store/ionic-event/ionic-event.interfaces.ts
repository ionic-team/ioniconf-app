import { IonicEvent } from '../store.interfaces';

export const ionicEventFeatureKey = 'ionic-event';

export interface IonicEventState {
  loaded: boolean;
  loading: boolean;
  event: IonicEvent;
  errorCode?: string;
  errorMessage?: string;
}
