import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';
import { ListaMedicaoProvider } from '../../providers/lista-medicao/lista-medicao';
import { PainelPage } from '../painel/painel';
@IonicPage()
@Component({
  selector: 'page-lista-medicao',
  templateUrl: 'lista-medicao.html',
})
export class ListaMedicaoPage {
  public medicao : any[];
  lista=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ListaMedicao: ListaMedicaoProvider, 
    public modalCtrl: ModalController) {
    let id = navParams.get('idTanque');

    this.lista=[
      {qtde:1000,perc:80.2,valor:1000},
      {qtde:8500,perc:30.2,valor:2000},
      {qtde:120,perc:18.2,valor:350.52}
    ];
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
