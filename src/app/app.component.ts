import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PainelPage } from '../pages/painel/painel';
import { AcessoLoginProvider } from '../providers/acesso-login/acesso-login';
//import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { ListaUsuariosPage } from '../pages/lista-usuarios/lista-usuarios';
@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public ir: Nav;
  rootPage:any = LoginPage.name;

  public paginas = [ 
    {titulo: 'Lista de Usuários', nomePagina: ListaUsuariosPage.name, icone:'person' },
    {titulo: 'Sair', nomePagina: LoginPage.name, icone:'return-left' }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _AcessoLogin: AcessoLoginProvider, private _loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(nomePagina){
    if(nomePagina == 'LoginPage'){
      let loading = this._loadingCtrl.create({
        content: 'Saindo...'
      });
      this.ir.setRoot(nomePagina);  
      this._AcessoLogin.logoutUsuario();
      loading.dismiss();
      console.log(this._AcessoLogin.retornaUsuarioLogado());
      return;
    }

    this.ir.push(nomePagina);
  }

  get UsuarioLogado(){
    return this._AcessoLogin.retornaUsuarioLogado();
  }
}

