import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { AcessoLoginProvider } from '../providers/acesso-login/acesso-login';
import { PainelPage } from '../pages/painel/painel';
import { ListaUsuariosPage } from '../pages/lista-usuarios/lista-usuarios';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { UrlServerProvider } from '../providers/url-server/url-server';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { ListaUsuariosProvider } from '../providers/lista-usuarios/lista-usuarios';




@NgModule({
  declarations: [
    MyApp,
    PainelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PainelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AcessoLoginProvider,
    UrlServerProvider,
    ListaUsuariosProvider
  ]
})
export class AppModule {}
