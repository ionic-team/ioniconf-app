import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { IonicEventStateModule } from './ionic-event/ionic-event-state.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    IonicEventStateModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
  ],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
