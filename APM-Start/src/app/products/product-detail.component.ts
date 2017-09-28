import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  // selector: 'pm-product-detail', Dont need this because we will display this component using routing, not directives
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Detail Page";
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');

    console.log(id);
  }

  onBack():void {
    this.router.navigate(['/products']);
  }
}
