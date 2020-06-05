import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }
  getData():Observable <any> {
    const url ='https://api.jsonbin.io/b/5ec6bf38e91d1e45d10eb13b'

    return this.http.get<any>(url)
  }


}
