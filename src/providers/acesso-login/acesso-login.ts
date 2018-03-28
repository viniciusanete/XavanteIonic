import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from "@angular/http";
import { Usuario } from '../../models/usuario';

@Injectable()
export class AcessoLoginProvider {
  
 private _url ='http://localhost:8080/';
 private _idUsuario : Usuario;
 private _tokenLogado: Usuario;
 
  constructor(public _http: HttpClient) {

  }


  login(dadosLogin){
    return this._http.post<Usuario>(this._url+'login/auth', (dadosLogin),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  ).do((id : Usuario) => this._idUsuario = id,
        (token: Usuario) => this._tokenLogado = token
      );
  
  }

}
