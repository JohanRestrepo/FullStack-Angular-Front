import { Routes } from '@angular/router';
import { Ejemplo } from './ejemplo/ejemplo';
import { CustomerList } from './components/customer-list/customer-list';
import { CustomerAdd } from './components/customer-add/customer-add';

export const routes: Routes = [
    { path: '', component: CustomerList }, //http:localhost:4200
    { path: 'add', component: CustomerAdd }, //http:localhost:4200/add
    { path: '**', redirectTo: '' }, // fallback
    { path: '', component: Ejemplo }
];
