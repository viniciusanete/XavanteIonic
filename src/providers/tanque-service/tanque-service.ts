import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerProvider } from '../url-server/url-server';
import { Tanque } from '../../models/tanque';


@Injectable()
export class TanqueServiceProvider {
  private _url = this._Url.urlServer();
  constructor(public _http: HttpClient, private _Url: UrlServerProvider) {
    
  }
    

  login(dadosTanque){
    return this._http.post<Tanque>(this._url+'auth/tanque', (dadosTanque),
    {
      headers: { 'Content-Type': 'application/json' }
    });

  }
}
