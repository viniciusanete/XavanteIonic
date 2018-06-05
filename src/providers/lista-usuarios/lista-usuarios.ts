import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerProvider } from '../url-server/url-server';
import { users } from '../../models/Usuarios';

@Injectable()
export class ListaUsuariosProvider {

  private _url = this._Url.urlServer();
  constructor(public _http: HttpClient, private _Url: UrlServerProvider) {
    
  }
  listaUsuarios(){
    return this._http.get<users[]>(this._url+"auth/user/users");
  }

}
