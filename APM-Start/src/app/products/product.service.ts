import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ProductService {

  private productUrl = './api/products/products.json';

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .catch(this.handleError);
  }

  // getProduct(id: number): Observable<IProduct> {
  //   this.http.get<IProduct[]>(this.productUrl)
  //   .do(data => {
  //     let myProduct = data.filter((product: IProduct) => product.productId == id);
  //     return myProduct;
  //   })
  //   .catch(this.handleError);
  // }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);

    return Observable.throw(err.message);
  }
}