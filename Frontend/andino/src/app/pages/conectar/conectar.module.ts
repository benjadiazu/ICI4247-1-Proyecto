import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectarPageRoutingModule } from './conectar-routing.module';

import { ConectarPage } from './conectar.page';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectarPageRoutingModule
  ],
  declarations: [
    ConectarPage,
    TarjetaComponent
  ]
})
export class ConectarPageModule {}
