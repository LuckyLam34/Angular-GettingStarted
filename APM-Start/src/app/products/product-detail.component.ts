import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail', Dont need this because we will display this component using routing, not directives
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Detail Page";
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
