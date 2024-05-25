import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/cuenta/login/login.page';
import { TabComponent } from './misc/tab/tab.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: '',
    component: TabComponent,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'monitorear',
        loadChildren: () => import('./pages/monitorear/monitorear.module').then( m => m.MonitorearPageModule)
      },
      {
        path: 'conectar',
        loadChildren: () => import('./pages/conectar/conectar.module').then( m => m.ConectarPageModule)
      },
      {
        path: 'informacion',
        loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
