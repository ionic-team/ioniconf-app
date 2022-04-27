import { CompaniesState } from './companies.interfaces';

export const initialState: CompaniesState = {
  loaded: false,
  loading: false,
  companyIds: [],
  companiesById: {},
};
