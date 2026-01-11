import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Customer {

  private api: string = 'http://localhost:8080/api/customers';
  
  constructor(private http: HttpClient){}

  getCustomerList():Observable<Customer []>{
    return this.http.get<Customer[]>(this.api);
  }
}
