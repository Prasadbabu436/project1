import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartProducts;
  constructor( public cs: CartService) { 

    
  }

  ngOnInit() {
    this.cartProducts=this.cs.getCartProductDetails();
  }

  xyz(){
      this.cartProducts.pop();
  }

}
