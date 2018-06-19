import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerProvider } from '../url-server/url-server';
import { Tanque } from '../../models/tanque';

@Injectable()
export class ListaTanqueProvider {
  private _Url = this._url.urlServer();  
  constructor(public _http: HttpClient, private _url: UrlServerProvider) {
  }

  listaTanque(){
    return this._http.get<Tanque[]>(this._Url+"auth/tanque/tanques");
  }

  listaMedicao(){
    return this._http.get(this._Url+"auth/medicao/tipos");
  }

}
