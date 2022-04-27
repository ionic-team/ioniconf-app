import { Company } from '../store.interfaces';

export const companiesFeatureKey = 'companies';

export interface CompaniesState {
  companyIds: number[];
  companiesById: ById<Company>;
  loaded: boolean;
  loading: boolean;
  errorCode?: string;
  errorMessage?: string;
}
