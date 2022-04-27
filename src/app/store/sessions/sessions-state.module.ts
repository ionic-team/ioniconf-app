import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SessionsEffects } from './sessions.effects';
import { sessionsFeatureKey } from './sessions.interfaces';
import { sessionsReducer } from './sessions.reducer';
import { initialState } from './sessions.state';

@NgModule({
  imports: [
    [
      StoreModule.forFeature(sessionsFeatureKey, sessionsReducer, {
        initialState,
      }),
      EffectsModule.forFeature([SessionsEffects]),
    ],
  ],
})
export class SessionsStateModule {}
