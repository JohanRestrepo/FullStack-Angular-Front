import { Routes } from '@angular/router';
import { Ejemplo } from './ejemplo/ejemplo';
import { CustomerList } from './components/customer-list/customer-list';

export const routes: Routes = [
    { path: '', component: CustomerList },
    { path: '', component: Ejemplo }
];
