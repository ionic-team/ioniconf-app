import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'agenda',
        loadChildren: () =>
          import('../pages/agenda/agenda.module').then(
            (m) => m.AgendaPageModule
          ),
      },
      {
        path: 'speakers',
        loadChildren: () =>
          import('../pages/speakers/speakers.module').then(
            (m) => m.SpeakersPageModule
          ),
      },
      // {
      //   path: 'sponsors',
      //   loadChildren: () =>
      //     import('../pages/sponsors/sponsors.module').then(
      //       (m) => m.SponsorsPageModule
      //     ),
      // },
      {
        path: 'swag',
        loadChildren: () =>
          import('../pages/swag/swag.module').then((m) => m.SwagPageModule),
      },
      {
        path: '',
        redirectTo: '/agenda',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
