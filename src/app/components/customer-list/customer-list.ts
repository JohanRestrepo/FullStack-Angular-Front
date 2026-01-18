import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList implements OnInit {
  
  customers : Customer [] = [];

  constructor(private customerService: CustomerService,private router: Router){}

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

  deleteCustomer(id : number){
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      () => this.listCustomers()
    );
  }

  editCustomer(id: number) {
    this.router.navigate(['customers', 'edit', id]);
  }

}
