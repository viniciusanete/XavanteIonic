import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, IonicPage } from 'ionic-angular';
import { Login } from '../../models/login';
import { AcessoLoginProvider } from '../../providers/acesso-login/acesso-login';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { PainelPage } from '../painel/painel';
import { InicioPanePage } from '../inicio-pane/inicio-pane';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: Login;
  public password: Login;

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _loginSerive: AcessoLoginProvider,
    private _http: HttpClient) {

    
  }

  autenticando(){
    if(!this.username){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha o campo de usuário!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();

      return;

    }else if (!this.password){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha o campo de senha!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();

      return;
    }

    let loading = this._loadingCtrl.create({
      content: 'Autenticando, aguarde...'
    });

    loading.present();

    let dadosLogin = JSON.stringify({
      username: this.username,
      password: this.password
    });

    let titulo = '';
    let mensagem = '';

    this._loginSerive.login(dadosLogin)
    .subscribe(
      (sucess => {
        loading.dismiss();
        this.navCtrl.setRoot(InicioPanePage.name);
      }), (err => {
        loading.dismiss();
        if(err.status == 0 || err.status == 500){
          titulo = 'Falha na autenticação';
          mensagem = 'Falha na conexão com o servidor. Tente novamente mais tarde!';
        }else if(err.status == 401){
          titulo = 'Falha na autenticação';
          mensagem = 'Usuário e/ou senha inválidos';
        }
        
        this._alertCtrl.create({
          title: titulo,
          subTitle: mensagem,
          buttons: [
            { text: 'Ok' }
          ]
        }).present();

      })
    );   
  }
}
