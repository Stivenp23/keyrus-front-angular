import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListProductComponent} from "./pages/list-product/list-product.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
