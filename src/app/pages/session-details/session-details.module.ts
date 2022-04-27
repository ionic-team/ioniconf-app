import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionDetailsPageRoutingModule } from './session-details-routing.module';

import { SessionDetailsPage } from './session-details.page';
import { SessionAvatarsComponentModule } from 'src/app/components/session-avatars/session-avatars.module';
import { TalkTimePipeModule } from 'src/app/pipes/talk-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionDetailsPageRoutingModule,
    SessionAvatarsComponentModule,
    TalkTimePipeModule,
  ],
  declarations: [SessionDetailsPage],
})
export class SessionDetailsPageModule {}
