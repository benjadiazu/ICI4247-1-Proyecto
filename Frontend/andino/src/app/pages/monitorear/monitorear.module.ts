import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorearPageRoutingModule } from './monitorear-routing.module';

import { MonitorearPage } from './monitorear.page';

import { MiscModule } from 'src/app/misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorearPageRoutingModule,
    MiscModule
  ],
  declarations: [
    MonitorearPage,
  ]
})
export class MonitorearPageModule {}