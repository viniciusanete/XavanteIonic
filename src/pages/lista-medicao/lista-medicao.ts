import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';
import { ListaMedicaoProvider } from '../../providers/lista-medicao/lista-medicao';
import { PainelPage } from '../painel/painel';
import { Medicao } from '../../models/medicao';
import { Tanque } from '../../models/tanque';
@IonicPage()
@Component({
  selector: 'page-lista-medicao',
  templateUrl: 'lista-medicao.html',
})
export class ListaMedicaoPage {
  public id: number;
  public array;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private ListaMedicao: ListaMedicaoProvider,
     private _alertCtrl: AlertController, 
    public modalCtrl: ModalController) {
     this.id = navParams.get('idTanque');
    }

  ionViewDidLoad() {
    this.ListaMedicao.listaTanque(this.id)
    .subscribe(
      (res) => {
        this.array = res;
        console.log(this.array);
    }, (err) => {
      console.log(err);
    });
  }

  fecharModal(){
    this.navCtrl.pop();
    //this.navCtrl.setRoot(PainelPage);
  }
}
