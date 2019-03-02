import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) {
  }
  getProducts(): Observable<any> {
    return this.http
      .get<any>('https://api.myjson.com/bins/yhav9');
  }
}
