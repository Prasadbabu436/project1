import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producthamb',
  templateUrl: './producthamb.component.html',
  styleUrls: ['./producthamb.component.css']
})
export class ProducthambComponent implements OnInit {

  
  constructor() { }
  @Input() prod;
  ngOnInit() {
    console.log(this.prod);
  }

}
