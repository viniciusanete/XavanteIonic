import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMedicaoPage } from './lista-medicao';

@NgModule({
  declarations: [
    ListaMedicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMedicaoPage),
  ],exports: [
    ListaMedicaoPage
  ]
})
export class ListaMedicaoPageModule {}
