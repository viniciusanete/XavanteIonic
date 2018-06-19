import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroArduinoPage } from '../cadastro-arduino/cadastro-arduino';
import { ArduiboProvider } from '../../providers/arduibo/arduibo';
@IonicPage()
@Component({
  selector: 'page-arduino',
  templateUrl: 'arduino.html',
})
export class ArduinoPage {
  public array;
  constructor(private _Arduinoservice: ArduiboProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this._Arduinoservice.lista()
    .subscribe(
      (res) => {
        this.array = res;
        console.log(this.array);
    }, (err) => {
         console.log(err);
    });
  }

  CriarArduino(){
    this.navCtrl.push(CadastroArduinoPage.name);
  }

}
