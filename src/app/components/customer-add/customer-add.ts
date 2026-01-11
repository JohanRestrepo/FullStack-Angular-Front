import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})
export class CustomerAdd implements OnInit{

  id : String = '';
  firstName : String = '';
  lastName : String = '';
  mail : String = '';
  
  ngOnInit(): void {
  }

}
