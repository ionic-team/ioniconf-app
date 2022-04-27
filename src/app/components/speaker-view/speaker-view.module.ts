import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SpeakerCardComponentModule } from '../speaker-card/speaker-card.module';
import { SpeakerViewComponent } from './speaker-view.component';

@NgModule({
  imports: [CommonModule, IonicModule, SpeakerCardComponentModule],
  declarations: [SpeakerViewComponent],
  exports: [SpeakerViewComponent],
})
export class SpeakerViewComponentModule {}
