import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroArduinoPage } from '../cadastro-arduino/cadastro-arduino';
@IonicPage()
@Component({
  selector: 'page-arduino',
  templateUrl: 'arduino.html',
})
export class ArduinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ArduinoPage');
  }

  CriarArduino(){
    this.navCtrl.push(CadastroArduinoPage.name);
  }

}
