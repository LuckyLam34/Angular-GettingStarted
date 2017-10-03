import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-product-detail', Dont need this because we will display this component using routing, not directives
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Detail Page";
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService
  ) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.productService.getProduct(id)
                        .subscribe(data => this.product = data);
  }

  onBack():void {
    this.router.navigate(['/products']);
  }
}
