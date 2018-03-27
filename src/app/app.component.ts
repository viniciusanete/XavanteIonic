import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PainelPage } from '../pages/painel/painel';
@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public ir: Nav;
  rootPage:any = LoginPage.name;

  public paginas = [ 
    {titulo: 'Sair', nomePagina: LoginPage.name, icone:'return-left' }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(nomePagina){
    if(nomePagina == 'LoginPage'){
      this.ir.setRoot(nomePagina);  
      return;
    }
    this.ir.push(nomePagina);
  }
}

