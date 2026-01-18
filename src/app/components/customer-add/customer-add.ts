import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CreateCustomer } from '../../create-customer';

@Component({
  selector: 'app-customer-add',
  imports: [FormsModule,RouterModule],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})
export class CustomerAdd implements OnInit{

  firstName : String = '';
  lastName : String = '';
  email : String = '';

  constructor(private customerService: CustomerService, private router: Router){

  }
  
  ngOnInit(): void {
  }

  addCustomer(){

    const customer: CreateCustomer = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email
    };

    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      () => {
    // Cuando el backend confirma que el customer se creó
    alert('Customer creado correctamente!');
    this.router.navigate(['/']);  // vuelve al listado
    }, error => {
      console.error('Error al crear customer:', error);
    }
    );
  }

}
