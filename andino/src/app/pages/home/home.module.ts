import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';

import { MiscModule } from 'src/app/misc/misc.module';

import { TarjetaEstadoComponent } from './tarjeta-estado/tarjeta-estado.component';
import { TarjetaMonitorComponent } from './tarjeta-monitor/tarjeta-monitor.component';
import { TarjetaConexionComponent } from './tarjeta-conexion/tarjeta-conexion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MiscModule,
  ],
  declarations: [
    HomePage,
    TarjetaEstadoComponent,
    TarjetaMonitorComponent,
    TarjetaConexionComponent,
  ]
})
export class HomePageModule {}
