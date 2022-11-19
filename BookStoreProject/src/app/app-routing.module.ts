import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { PlacedComponent } from './component/placed/placed.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cart", component:CartComponent},
  {path:"placed",component:PlacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
