import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'seguridad',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../seguridad/seguridad.module').then(m => m.SeguridadPageModule)
          }
        ]
      },
      {
        path: 'informativo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../informativo/informativo.module').then(m => m.InformativoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/seguridad',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
