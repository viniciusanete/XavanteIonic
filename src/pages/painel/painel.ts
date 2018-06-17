import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
     private _Tanque: ListaTanqueProvider,
     public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
   return  this._Tanque.listaTanque().subscribe(
      (res) => {
        this.tanqueDisponiveis = res;
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
      const modal = this.modalCtrl.create(ListaMedicaoPage.name,
        {
          idTanque: id
        });

        modal.present();
      /*
      this.navCtrl.push(ListaMedicaoPage.name,
      {
        idTanque: id
      });*/
    }
}
