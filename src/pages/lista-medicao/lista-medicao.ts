import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';
import { ListaMedicaoProvider } from '../../providers/lista-medicao/lista-medicao';
@IonicPage()
@Component({
  selector: 'page-lista-medicao',
  templateUrl: 'lista-medicao.html',
})
export class ListaMedicaoPage {
  public medicao : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ListaMedicao: ListaMedicaoProvider) {
    let id = navParams.get('idTanque');
  }

  DadosMedicao(id) {
    return this.ListaMedicao.listaTanque(id).subscribe(
      (res) => {
        this.medicao = res;
        console.log(res);
    }, (err) => {
      console.log(err);
    });
    );
  }

}
