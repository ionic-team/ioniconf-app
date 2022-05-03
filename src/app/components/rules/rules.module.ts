import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RulesComponent } from './rules.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [RulesComponent],
  exports: [RulesComponent],
})
export class RulesComponentModule {}
