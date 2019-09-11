import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetInformationService {
  public passInfo: any;

  constructor(private httpClient: HttpClient) {}

  //api call
  public getInfo() {
     return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
