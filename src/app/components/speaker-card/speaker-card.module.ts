import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SpeakerCardComponent } from './speaker-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SpeakerCardComponent],
  exports: [SpeakerCardComponent],
})
export class SpeakerCardComponentModule {}
