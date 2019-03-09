import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) {
  }
  public getProducts(): Observable<any> {
    return this.http
      .get<any>('https://api.myjson.com/bins/yhav9');
  }

   public getCategories (): Observable<any> {
      return this.http
         .get<any>('https://api.myjson.com/bins/96nig?fbclid=IwAR3mdy3miTGx_Lge88UMluoKeG3Tsw8cRqSGfBckbIXc38e6KLmGXLy4p1A');
   }
}
