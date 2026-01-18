import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer';

@Component({
  selector: 'app-customer-edit',
  imports: [RouterModule,FormsModule],
  templateUrl: './customer-edit.html',
  styleUrl: './customer-edit.css',
})
export class CustomerEdit implements OnInit{
  
  customer: Customer = new Customer(0,"","","");
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    });
  }

  onSubmit() {
  this.customerService.updateCustomer(this.customer).subscribe({
    next: () => {
      this.router.navigate(['/']); // vuelve al listado
    },
    error: err => console.error(err)
  });
}

}
