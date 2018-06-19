import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ListaTanqueProvider } from '../../providers/lista-tanque/lista-tanque';
import { Tanque } from '../../models/tanque';
import { Arduino } from '../../models/arduino';
import { ArduiboProvider } from '../../providers/arduibo/arduibo';
import { PainelPage } from '../painel/painel';
import { InicioPanePage } from '../inicio-pane/inicio-pane';
@IonicPage()
@Component({
  selector: 'page-cadastro-arduino',
  templateUrl: 'cadastro-arduino.html',
})
export class CadastroArduinoPage {
  public tanqueDisponiveis : Tanque[];
  public tiposDisponiveis : object;
  public Codigo: Arduino;
  public Tanque: Arduino;
  public Tipo: Arduino;
  public ip: Arduino;
  constructor(private _Arduinoservice: ArduiboProvider, private _loadingCtrl: LoadingController,private _alertCtrl: AlertController,private _Tanque: ListaTanqueProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this._Tanque.listaTanque().subscribe(
      (res) => {
        this.tanqueDisponiveis = res;
    }, (err) => {
      this._alertCtrl.create({
        title: 'Erro',
        subTitle: 'Erro ao carregar lista de Tanques!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();
      console.log(err);
    });

    this._Tanque.listaMedicao().subscribe(
      (res) => {
        this.tiposDisponiveis = res;
        console.log(this.tiposDisponiveis);
    }, (err) => {
      this._alertCtrl.create({
        title: 'Erro',
        subTitle: 'Erro ao carregar lista de Tipos!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();
      console.log(err);
    });
  }

  salvando(){
    if(!this.Codigo){
      this._alertCtrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha o campo de nome!',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();
      return;
    }
      if(!this.Tanque){
        this._alertCtrl.create({
          title: 'Preenchimento obrigatório',
          subTitle: 'Preencha o campo de Tanque!',
          buttons: [
            {text: 'Ok'}
          ]
        }).present();
        return;
      }
        if(!this.Tipo){
          this._alertCtrl.create({
            title: 'Preenchimento obrigatório',
            subTitle: 'Preencha o campo de Tipo!',
            buttons: [
              {text: 'Ok'}
            ]
          }).present();
          return;
        }

        let loading = this._loadingCtrl.create({
          content: 'Validando informações, aguarde...'
        });
        //console.log(this.ip);
        loading.present();
        loading.dismiss();
        
        let dadosArduino = JSON.stringify({
          codigo: this.Codigo,
          tanque: this.Tanque,
          tipo: this.Tipo,
          ip: this.ip
        });
          console.log(dadosArduino);
        let mensagem = '';
        let titulo = '';
        this._Arduinoservice.Arduino(dadosArduino)
    .subscribe(
      (sucess => {
        titulo = 'Sucesso';
          mensagem = 'Cadastrado com Sucesso!';
          this._alertCtrl.create({
            title: titulo,
            subTitle: mensagem,
            buttons: [
              { text: 'Ok' ,                      
                handler: () => {
                this.navCtrl.popToRoot();
              }}
            ]
          }).present();
      }), (err => {
        console.log(err);
        loading.dismiss();
          titulo = 'Falha';
          mensagem = 'Ocorreu uma falha. Tente novamente mais tarde!';
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