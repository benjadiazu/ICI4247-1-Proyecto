import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabComponent } from './tab/tab.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    TabComponent,
    MenuSuperiorComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TabComponent,
    MenuSuperiorComponent,
  ]
})
export class MiscModule { }
