import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArduinoPage } from './arduino';

@NgModule({
  declarations: [
    ArduinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArduinoPage),
  ],exports: [
    ArduinoPage
  ]
})
export class ArduinoPageModule {}
