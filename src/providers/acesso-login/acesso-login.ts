import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from "@angular/http";

@Injectable()
export class AcessoLoginProvider {
  
 private _url ='http://localhost:8080/';
 
  constructor(public _http: HttpClient) {

  }


  login(dadosLogin){
    return this._http.post(this._url+'login/auth', (dadosLogin),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
  }

}
