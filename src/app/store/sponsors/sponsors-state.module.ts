import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SponsorsEffects } from './sponsors.effects';
import { sponsorsFeatureKey } from './sponsors.interfaces';
import { sponsorsReducer } from './sponsors.reducer';
import { initialState } from './sponsors.state';

@NgModule({
  imports: [
    [
      StoreModule.forFeature(sponsorsFeatureKey, sponsorsReducer, {
        initialState,
      }),
      EffectsModule.forFeature([SponsorsEffects]),
    ],
  ],
})
export class SponsorsStateModule {}
