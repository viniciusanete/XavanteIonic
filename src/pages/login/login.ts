import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Login } from '../../models/login';
import { AcessoLoginProvider } from '../../providers/acesso-login/acesso-login';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public usuario: Login;
  public senha: Login;

  constructor(public navCtrl: NavController, 
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _loginSerive: AcessoLoginProvider,
    private _http: HttpClient) {

    
  }

  autenticando(){
    if(!this.usuario){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha o campo de usuário!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();

      return;

    }else if (!this.senha){
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
      username: this.usuario,
      password: this.senha
    });

    let titulo = '';
    let mensagem = '';

    this._loginSerive.login(dadosLogin)
    .subscribe(
      (sucess => {
        loading.dismiss();
        alert('Sucesso');
        //this.navCtrl.setRoot(HomePage);
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
