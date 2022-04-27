import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreCardComponent } from './explore-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [ExploreCardComponent],
  exports: [ExploreCardComponent],
})
export class ExploreCardComponentModule {}
