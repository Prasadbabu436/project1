import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { router} from './product.router';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from './product.service';
import { ProducthambComponent } from './producthamb/producthamb.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [ProductlistComponent, ProducthambComponent, ProductdetailsComponent, CartComponent],
  providers:[ProductService, CartService ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(router)
  ]



})
export class ProductModule { }
