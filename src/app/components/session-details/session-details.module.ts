import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TalkTimePipeModule } from 'src/app/pipes/talk-time.pipe';
import { SessionAvatarsComponentModule } from '../session-avatars/session-avatars.module';
import { SessionDetailsComponent } from './session-details.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SessionAvatarsComponentModule,
    TalkTimePipeModule,
  ],
  declarations: [SessionDetailsComponent],
  exports: [SessionDetailsComponent],
})
export class SessionDetailsComponentModule {}
