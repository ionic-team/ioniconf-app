import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import { SessionsStateModule } from 'src/app/store/sessions/sessions-state.module';
import { SessionCardComponentModule } from 'src/app/components/session-card/session-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    SessionsStateModule,
    SessionCardComponentModule,
  ],
  declarations: [AgendaPage],
})
export class AgendaPageModule {}
