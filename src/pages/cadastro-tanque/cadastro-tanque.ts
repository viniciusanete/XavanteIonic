import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Tanque } from '../../models/tanque';
import { TanqueServiceProvider } from '../../providers/tanque-service/tanque-service';
@IonicPage()
@Component({
  selector: 'page-cadastro-tanque',
  templateUrl: 'cadastro-tanque.html',
})
export class CadastroTanquePage {
  public name: Tanque;
  public capacity: Tanque;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _TanqueProvider: TanqueServiceProvider
  ) {
  }

  salvando(){
    if(!this.name){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha o campo de nome do tanque!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();

        return;
    }
    
    this._alertCtrl.create({
      title: 'Cadastrando Tanque',
      subTitle: 'Não será possível alterar os dados do tanque cadastrado. Deseja confirmar?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            let dadosTanque = JSON.stringify({
              name: this.name,
              capacity: this.capacity
            });
        
            let titulo = '';
            let mensagem = '';
            
            this._TanqueProvider.login(dadosTanque)
            .subscribe(
              (sucess => {
                this._alertCtrl.create({
                  title: 'Sucesso',
                  subTitle: 'O tanque foi cadastrado com sucesso.',
                  buttons: [
                    { text: 'Ok' }
                  ]
                }).present();
              }), (err => {
                if(err.status == 0 || err.status == 400 || err.status == 401){
                  titulo = 'Falha na validação';
                  mensagem = 'Ocorreu uma falha na validação dos dados.';
               }              
              })
            );  
          }
      },
        {
          text: 'Cancelar',
          handler: () => {
            return;
          }
        }
      ]
    }).present();
  }
}
