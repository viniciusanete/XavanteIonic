import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTanquePage } from './cadastro-tanque';

@NgModule({
  declarations: [
    CadastroTanquePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTanquePage),
  ],exports: [
    CadastroTanquePage
  ]
})
export class CadastroTanquePageModule {}
