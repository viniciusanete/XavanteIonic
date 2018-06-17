import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerProvider } from '../url-server/url-server';
import { Arduino } from '../../models/arduino';

@Injectable()
export class ArduiboProvider {
  private _Url = this._url.urlServer();  
  constructor(public _http: HttpClient,  private _url: UrlServerProvider) {}
    
     Arduino(dadosArduino){
        return this._http.post<Arduino>(this._Url+"auth/arduino",(dadosArduino),
              {
                headers:  { 'Content-Type': 'application/json', }
              }).do( res => console.log(res));
      }
}
