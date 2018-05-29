import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { apiUrl, getAuthHeaders } from '../constants';

import Mobilni from '../model/mobilni';
import { forEach } from '@angular/router/src/utils/collection';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export default class GetMobilniService {
  protected url = apiUrl + 'getMobilni.php';

  constructor (protected http: Http) {}

  getMobilni(): Observable<Mobilni[]> {
    return this.http.get(this.url, {headers: getAuthHeaders() })
      .map(res=>
      { 
       var data:Mobilni[]=[];
       for(const mobilni of this.extractData(res)) {
        //  Ukoliko se ne podudaraju vrednosti u php i na frontu
        //  a sada se ne podudaraju zbog izmenjenog brenda onda mora da se konzolira rezultat i 
        //  da se kreira objekat kako je njegov konstruktor - > mobilni.ts 
         console.log(mobilni);
        //  Kreiramo pojedinačni mobilni pomoću konstruktora
        //  i sada se u konzoli taj objekat vidi kao Mobilni
        data.push(
          new Mobilni(
            mobilni.IME,
            mobilni.CENA,
            mobilni.OPIS,
            mobilni.BRAND_ID,
            mobilni.BRAND_IME,
            mobilni.ID)
          );
       }
      return data});
  }
  protected extractData(res: Response) {
    let obj = JSON.parse(res['_body']);
    return obj.mobilni;
  }

}
