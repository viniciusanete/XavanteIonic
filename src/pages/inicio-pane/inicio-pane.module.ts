import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPanePage } from './inicio-pane';

@NgModule({
  declarations: [
    InicioPanePage,
  ],
  imports: [
    IonicPageModule.forChild(InicioPanePage),
  ],exports: [
    InicioPanePage
  ]
})
export class InicioPanePageModule {}
