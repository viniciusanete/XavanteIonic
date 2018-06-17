import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroArduinoPage } from './cadastro-arduino';

@NgModule({
  declarations: [
    CadastroArduinoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroArduinoPage),
  ],exports:[
    CadastroArduinoPage
  ]
})
export class CadastroArduinoPageModule {}
