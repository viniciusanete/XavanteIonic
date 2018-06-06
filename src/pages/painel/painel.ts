import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';

@IonicPage()
@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html',
})
export class PainelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
   irParaPagina(nomePagina){
		if(nomePagina == 'temperatura'){
			this.navCtrl.push(TemperaturaPage.name);
		}
    }
}
