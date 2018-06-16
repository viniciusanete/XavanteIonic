import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';
import { Tanque } from '../../models/tanque';
import { ListaMedicaoPage } from '../lista-medicao/lista-medicao';

@IonicPage()
@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html',
})


export class PainelPage {
  public tanqueDisponiveis : Tanque[];
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _Tanque: ListaTanqueProvider) {
  }
  
  ionViewDidLoad() {
   return  this._Tanque.listaTanque().subscribe(
      (res) => {
        this.tanqueDisponiveis = res;
        console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

   irParaPagina(nomePagina){
		if(nomePagina == 'temperatura'){
			this.navCtrl.push(TemperaturaPage.name);
		}
    }

    paginaTanque(id){
      this.navCtrl.push(ListaMedicaoPage.name,
      {
        idTanque: id
      });
    }
}
