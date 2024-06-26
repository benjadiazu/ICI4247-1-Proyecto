import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabComponent } from './tab/tab.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    TabComponent,
    RefreshComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TabComponent,
    RefreshComponent,
  ]
})
export class MiscModule { }
