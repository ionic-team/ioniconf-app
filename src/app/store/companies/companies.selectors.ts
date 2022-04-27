/* eslint-disable no-underscore-dangle */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from '../store.interfaces';
import { companiesFeatureKey, CompaniesState } from './companies.interfaces';

const getCompaniesState =
  createFeatureSelector<CompaniesState>(companiesFeatureKey);

// private selectors used to help build the company list
const _allIds = createSelector(
  getCompaniesState,
  (state: CompaniesState) => state.companyIds
);
const _companiesById = createSelector(
  getCompaniesState,
  (state: CompaniesState) => state.companiesById
);

const getCompanies = createSelector(
  _allIds,
  _companiesById,
  (allIds: number[], byId: ById<Company>) => allIds.map((id) => byId[id])
);

const getCompanyById = (id: number) =>
  createSelector(getCompanies, (companies: Company[]) =>
    companies.find((s) => s.id === id)
  );

const companiesLoaded = createSelector(
  getCompaniesState,
  (state: CompaniesState) => state.loaded
);
const companiesLoading = createSelector(
  getCompaniesState,
  (state: CompaniesState) => state.loading
);

export const companiesQuery = {
  getCompanies,
  getCompanyById,
  companiesLoaded,
  companiesLoading,
};
