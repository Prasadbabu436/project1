import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( public http:HttpClient) { }

  getAllProducts(){

 return this.http.get("https://api.mlab.com/api/1/databases/shopping/collections/products?apiKey=pERCcTufAptXTnImZCuPhWpAo0DS4Mxy")

  }

  getProductDetailsById(id) {
    return this.http.get(`https://api.mlab.com/api/1/databases/shopping/collections/products/${id}?apiKey=pERCcTufAptXTnImZCuPhWpAo0DS4Mxy`)
  }
}
