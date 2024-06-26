import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorearPage } from '../monitorear/monitorear.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorearPageRoutingModule {}
