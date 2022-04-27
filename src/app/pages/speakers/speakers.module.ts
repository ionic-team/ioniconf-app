import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakersPageRoutingModule } from './speakers-routing.module';

import { SpeakersPage } from './speakers.page';
import { SpeakersStateModule } from 'src/app/store/speakers/speakers-state.module';
import { SpeakerCardComponentModule } from 'src/app/components/speaker-card/speaker-card.module';
import { SpeakerViewComponentModule } from 'src/app/components/speaker-view/speaker-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersPageRoutingModule,
    SpeakersStateModule,
    SpeakerCardComponentModule,
    SpeakerViewComponentModule,
  ],
  declarations: [SpeakersPage],
})
export class SpeakersPageModule {}
