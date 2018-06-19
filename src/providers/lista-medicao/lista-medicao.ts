import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerProvider } from '../url-server/url-server';
import { Medicao } from '../../models/medicao';


@Injectable()
export class ListaMedicaoProvider {
  private _Url = this._url.urlServer();  
  constructor(public _http: HttpClient,  private _url: UrlServerProvider) {

  }

  
    listaTanque(id){
      return this._http.get<Medicao>(this._Url+"auth/medicao/tanque/" + id);
    }

}
