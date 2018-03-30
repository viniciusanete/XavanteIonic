import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from "@angular/http";
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AcessoLoginProvider {
  
 private _url ='http://localhost:8080/';
 private _dadosUsuarios : Usuario;

  constructor(public _http: HttpClient) {

  }


  login(dadosLogin){
    return this._http.post<Usuario>(this._url+'login/auth', (dadosLogin),
    {
      headers: { 'Content-Type': 'application/json' }
    }
   ).do(
        id => this._dadosUsuarios = id,
      );
  
  }

  public retornaUsuarioLogado(){
     return this._dadosUsuarios;
  }

  logoutUsuario(){
     // this._dadosUsuarios = null;
  }
}
