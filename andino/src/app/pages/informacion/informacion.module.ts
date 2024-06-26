import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionPageRoutingModule } from './informacion-routing.module';

import { InformacionPage } from './informacion.page';
import { RoutesComponent } from './routes/routes.component';
import { InfoComponent } from './info/info.component';

import { MiscModule } from 'src/app/misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionPageRoutingModule,
    MiscModule
  ],
  declarations: [
    InformacionPage,
    RoutesComponent,
    InfoComponent
  ]
})
export class InformacionPageModule {}