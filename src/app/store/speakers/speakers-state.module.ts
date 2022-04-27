import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SpeakersEffects } from './speakers.effects';
import { speakersFeatureKey } from './speakers.interfaces';
import { speakersReducer } from './speakers.reducer';
import { initialState } from './speakers.state';

@NgModule({
  imports: [
    [
      StoreModule.forFeature(speakersFeatureKey, speakersReducer, {
        initialState,
      }),
      EffectsModule.forFeature([SpeakersEffects]),
    ],
  ],
})
export class SpeakersStateModule {}
