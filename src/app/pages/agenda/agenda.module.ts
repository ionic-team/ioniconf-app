import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SessionCardComponentModule } from 'src/app/components/session-card/session-card.module';
import { SessionsStateModule } from 'src/app/store/sessions/sessions-state.module';
import { AgendaPageRoutingModule } from './agenda-routing.module';
import { AgendaPage } from './agenda.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgendaPageRoutingModule,
    SessionsStateModule,
    SessionCardComponentModule,
  ],
  declarations: [AgendaPage],
})
export class AgendaPageModule {}
