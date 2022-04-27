import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicEventEffects } from './ionic-event.effects';
import { ionicEventFeatureKey } from './ionic-event.interfaces';
import { eventReducer } from './ionic-event.reducer';
import { initialState } from './ionic-event.state';

@NgModule({
  imports: [
    [
      StoreModule.forFeature(ionicEventFeatureKey, eventReducer, {
        initialState,
      }),
      EffectsModule.forFeature([IonicEventEffects]),
    ],
  ],
})
export class IonicEventStateModule {}
