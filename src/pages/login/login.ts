import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../../models/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public usuario: Login;
  public senha: Login;

  constructor(public navCtrl: NavController) {

    //this.navCtrl.push(NomePagina);
  }

  autenticando(){
    console.log(this.usuario);
    console.log(this.senha);

  }
}
