import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermissionsComponent } from './permissions.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PermissionsComponent],
  exports: [PermissionsComponent],
})
export class PermissionsComponentModule {}
