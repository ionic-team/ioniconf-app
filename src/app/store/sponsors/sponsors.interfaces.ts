import { Sponsor } from '../store.interfaces';

export const sponsorsFeatureKey = 'sponsors';

export interface SponsorsState {
  sponsorIds: number[];
  sponsorsById: ById<Sponsor>;
  loaded: boolean;
  loading: boolean;
  errorCode?: string;
  errorMessage?: string;
}
