import { createReducer, on } from '@ngrx/store';
import { companiesActions } from './companies.actions';
import { initialState } from './companies.state';

export const companiesReducer = createReducer(
  initialState,
  on(companiesActions.loadCompanies, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(companiesActions.loadCompaniesStarted, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(companiesActions.loadCompaniesSuccess, (state, action) => ({
    ...state,
    companyIds: [...new Set(action.companies.map((s) => s.id))],
    companiesById: action.companies.reduce(
      (next, company) => ({ ...next, [company.id]: company }),
      {}
    ),
    loading: false,
    loaded: true,
  })),
  on(companiesActions.loadCompaniesError, (state, error) => ({
    ...state,
    companyIds: [],
    companiesById: {},
    loading: false,
    loaded: false,
    errorCode: error.code,
    errorMessage: error.message,
  }))
);
