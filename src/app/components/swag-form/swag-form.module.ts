import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwagFormComponent } from './swag-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [SwagFormComponent],
  exports: [SwagFormComponent],
})
export class SwagFormComponentModule {}
