/* eslint-disable @typescript-eslint/naming-convention */
import { createAction, props } from '@ngrx/store';

import { createErrorAction } from '../actions-util';
import { Company } from '../store.interfaces';

export const enum CompaniesActionTypes {
  LoadCompanies = '[Companies] Load Companies',
  LoadCompaniesStarted = '[Companies] Load Companies Started',
  LoadCompaniesSuccess = '[Companies] Load Companies Success',
  LoadCompaniesError = '[Companies] Load Companies Error',
}

const loadCompanies = createAction(CompaniesActionTypes.LoadCompanies);
const loadCompaniesStarted = createAction(
  CompaniesActionTypes.LoadCompaniesStarted
);
const loadCompaniesError = createErrorAction(
  CompaniesActionTypes.LoadCompaniesError
);
const loadCompaniesSuccess = createAction(
  CompaniesActionTypes.LoadCompaniesSuccess,
  props<{ companies: Company[] }>()
);

export const companiesActions = {
  loadCompanies,
  loadCompaniesStarted,
  loadCompaniesError,
  loadCompaniesSuccess,
};
