import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredProducts: IProduct[];
  errorMesage: string;

  _listFilter: string;
  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  };

  get listFilter(): string {
    return this._listFilter;
  }

  products: IProduct[];

  constructor(private productService: ProductService) {

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  };

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error => this.errorMesage = <any>error // this is called casting
      );
  };

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}