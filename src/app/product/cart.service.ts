import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=[];
  cartDetails=[];
  updateCart = new Subject(); 
  constructor( public http:HttpClient) { }
  addProductToCount(id){
    this.cart.push(id);
     var length:number=this.cart.length;
     this.updateCart.next(length);
  }
  removeProductToCount(){
    this.cart.pop();
  
  }

  getCartProductDetails()
  {
   
    for(let i=0;i<this.cart.length;i++){
      this.http.get(`https://api.mlab.com/api/1/databases/shopping/collections/products/${this.cart[i]}?apiKey=pERCcTufAptXTnImZCuPhWpAo0DS4Mxy`)
      .subscribe((res) =>{
        this.cartDetails.push(res);
      });
    }

    return this.cartDetails;
  }
}
