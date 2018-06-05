import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaUsuariosProvider } from '../../providers/lista-usuarios/lista-usuarios';
import { users } from '../../models/Usuarios';
import { HttpErrorResponse } from '@angular/common/http';
import { CadastrarUsuarioPage } from '../cadastrar-usuario/cadastrar-usuario';
@IonicPage()
@Component({
  selector: 'page-lista-usuarios',
  templateUrl: 'lista-usuarios.html',
})
export class ListaUsuariosPage {

  public usuarios: users[];

  constructor(public navCtrl: NavController, private _alertCtrl: AlertController, public navParams: NavParams, private _usuariosService: ListaUsuariosProvider) {}

  ionViewDidLoad() {
    this._usuariosService.listaUsuarios()
    .subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    ); 
  }
  
  CriarUsuario(){
      this.navCtrl.push(CadastrarUsuarioPage.name);
  }

    
}
