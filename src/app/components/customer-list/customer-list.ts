import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterModule],
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
