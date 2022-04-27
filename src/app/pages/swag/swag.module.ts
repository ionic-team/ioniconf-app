import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SwagFormComponentModule } from 'src/app/components/swag-form/swag-form.module';
import { SwagPageRoutingModule } from './swag-routing.module';
import { SwagPage } from './swag.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SwagFormComponentModule,
    SwagPageRoutingModule,
  ],
  declarations: [SwagPage],
})
export class SwagPageModule {}
