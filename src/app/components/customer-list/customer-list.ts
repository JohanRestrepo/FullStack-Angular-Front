import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {
  
  customers : Customer [] = [];

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(){
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      }
    );
  }

}
