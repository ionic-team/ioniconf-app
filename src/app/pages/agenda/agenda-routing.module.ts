import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPage } from './agenda.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage,
  },
  {
    path: ':sessionId',
    loadChildren: () =>
      import('src/app/pages/session-details/session-details.module').then(
        (m) => m.SessionDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPageRoutingModule {}
