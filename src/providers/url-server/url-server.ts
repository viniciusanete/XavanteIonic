import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlServerProvider {

  constructor(public http: HttpClient) {
  }

  urlServer(){
  //return 'http://localhost:8080/';
	return 'http://10.0.18.183:8080/';

  }
}
