import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TalkTimePipeModule } from 'src/app/pipes/talk-time.pipe';
import { SessionAvatarsComponentModule } from '../session-avatars/session-avatars.module';
import { SessionCardComponent } from './session-card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SessionAvatarsComponentModule,
    TalkTimePipeModule,
    RouterModule,
  ],
  declarations: [SessionCardComponent],
  exports: [SessionCardComponent],
})
export class SessionCardComponentModule {}
