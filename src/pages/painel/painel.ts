import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';
import { TanqueServiceProvider } from '../../providers/tanque-service/tanque-service';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';

@IonicPage()
@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html',
})
export class PainelPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private _Tanque: ListaTanqueProvider) {
  }
  
  get TanqueDisponivel(){
    console.log(this._Tanque.listaTanque());
    return this._Tanque.listaTanque();
  }

   irParaPagina(nomePagina){
		if(nomePagina == 'temperatura'){
			this.navCtrl.push(TemperaturaPage.name);
		}
    }
}
