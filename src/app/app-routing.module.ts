import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ CarComponent } from 'src/app/car/car.component';
import {FirstviewComponent} from 'src/app/firstview/firstview.component'


const routes: Routes = [{path : 'cars', component:CarComponent} ,
{path : '' ,component: FirstviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
