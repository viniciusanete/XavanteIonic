import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemperaturaPage } from './temperatura';

@NgModule({
  declarations: [
    TemperaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(TemperaturaPage),
  ],exports: [
	TemperaturaPage
  ]
})
export class TemperaturaPageModule {}
