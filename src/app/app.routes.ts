import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';

export const routes: Routes = [{ path: 'home', component: HomeComponent } ,
  { path: 'list', component: ListComponent },
  { path: 'input', component: InputComponent }
];
