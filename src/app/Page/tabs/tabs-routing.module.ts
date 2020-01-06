import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
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
        redirectTo: 'seguridad',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'seguridad',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
