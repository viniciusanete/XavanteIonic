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
  public array: Array<Object>;
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
      this._alertCtrl.create({
        title: 'Erro',
        subTitle: 'Erro ao carregar lista de medições!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();
      console.log(err);
    });
  }

  fecharModal(){
    this.navCtrl.pop();
    //this.navCtrl.setRoot(PainelPage);
  }
  DadosMedicao(id) {
   /* return this.ListaMedicao.listaTanque(id).subscribe(
      (res) => {
        this.medicao = res;
        console.log(res);
    }, (err) => {
      console.log(err);
    });*/
 }

}
