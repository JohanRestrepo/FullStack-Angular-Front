import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private api: string = 'http://localhost:8080/api/customers';
  
  constructor(private http: HttpClient){}

  getCustomerList():Observable<Customer []>{
    return this.http.get<Customer[]>(this.api);
  }

  getCustomerById(id : number):Observable<Customer>{
    return this.http.get<Customer>(this.api+'/'+id);
  }

  createCustomer(customer: any) {
    return this.http.post(this.api, customer);
  }

  deleteCustomerById(id : number):Observable<any>{
    return this.http.delete(this.api+'/'+id);
  }

  updateCustomer(customer: Customer){
    return this.http.put<Customer>(this.api, customer);
  }
}
