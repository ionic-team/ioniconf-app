import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { companiesActions } from '../store/companies/companies.actions';
import { CompaniesState } from '../store/companies/companies.interfaces';
import { companiesQuery } from '../store/companies/companies.selectors';
import { Company } from '../store/store.interfaces';

@Injectable({ providedIn: 'root' })
export class CompaniesFacade {
  public comapnies$: Observable<Company[]> = this.store.select(
    companiesQuery.getCompanies
  );
  public companiesLoading$ = this.store.select(companiesQuery.companiesLoading);

  constructor(private store: Store<CompaniesState>) {}

  public loadCompaniesData = (): void =>
    this.store.dispatch(companiesActions.loadCompanies());

  public getCompany = (id: number): Observable<Company> =>
    this.store.select(companiesQuery.getCompanyById(id));
}
