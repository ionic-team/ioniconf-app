import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SpeakerCardComponentModule } from 'src/app/components/speaker-card/speaker-card.module';
import { SpeakerViewComponentModule } from 'src/app/components/speaker-view/speaker-view.module';
import { SpeakersStateModule } from 'src/app/store/speakers/speakers-state.module';
import { SpeakersPageRoutingModule } from './speakers-routing.module';
import { SpeakersPage } from './speakers.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakersPageRoutingModule,
    SpeakersStateModule,
    SpeakerCardComponentModule,
    SpeakerViewComponentModule,
  ],
  declarations: [SpeakersPage],
})
export class SpeakersPageModule {}
