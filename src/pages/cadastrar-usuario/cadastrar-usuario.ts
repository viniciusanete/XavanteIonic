import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.html',
})
export class CadastrarUsuarioPage {
  public name: string;
  public email: string;
  public username: string;
  public password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _loadingCtrl: LoadingController) {
  }
  
  salvando(){
    let loading = this._loadingCtrl.create({
      content: 'Validando dados, aguarde...'
    });

    loading.present();

    let dadosLogin = JSON.stringify({
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    });

    console.log(dadosLogin);
  }

}
