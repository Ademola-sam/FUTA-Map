import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/auth.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'explore',
        loadChildren: () =>
          import('./explore/explore.module').then((m) => m.ExplorePageModule),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'more',
        loadChildren: () =>
          import('./more/more.module').then((m) => m.MorePageModule),
      },
      {
        path: '',
        redirectTo: 'explore',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: '/tabs/explore',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
