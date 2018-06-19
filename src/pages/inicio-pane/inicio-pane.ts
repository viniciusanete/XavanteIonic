import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArduinoPage } from '../arduino/arduino';
import { CadastroTanquePage } from '../cadastro-tanque/cadastro-tanque';
import { CadastrarUsuarioPage } from '../cadastrar-usuario/cadastrar-usuario';
import { ListaUsuariosPage } from '../lista-usuarios/lista-usuarios';
import { PainelPage } from '../painel/painel';
@IonicPage()
@Component({
  selector: 'page-inicio-pane',
  templateUrl: 'inicio-pane.html',
})
export class InicioPanePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPanePage');
  }

  page(nome){
    this.navCtrl.push(nome);
  }

}
