import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SessionAvatarsComponent } from './session-avatars.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [SessionAvatarsComponent],
  exports: [SessionAvatarsComponent],
})
export class SessionAvatarsComponentModule {}
