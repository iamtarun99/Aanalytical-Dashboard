import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
   }

   getData():Observable<any>{
     return this.http.get('/assets/MockShareMarketData.json').pipe(
       catchError( error => {
        console.log(error);
        return error
       })
     );
   }
}
