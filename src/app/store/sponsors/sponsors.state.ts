import { SponsorsState } from './sponsors.interfaces';

export const initialState: SponsorsState = {
  loaded: false,
  loading: false,
  sponsorIds: [],
  sponsorsById: {},
};
