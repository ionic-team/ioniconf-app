import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CompaniesEffects } from './companies.effects';
import { companiesFeatureKey } from './companies.interfaces';
import { companiesReducer } from './companies.reducer';
import { initialState } from './companies.state';

@NgModule({
  imports: [
    [
      StoreModule.forFeature(companiesFeatureKey, companiesReducer, {
        initialState,
      }),
      EffectsModule.forFeature([CompaniesEffects]),
    ],
  ],
})
export class CompaniesStateModule {}
