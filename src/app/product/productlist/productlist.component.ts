import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist;
  constructor( public ps:ProductService) { }

  ngOnInit() {

    this.ps.getAllProducts().subscribe((res) => { this.productlist=res;
    });
  }

}
