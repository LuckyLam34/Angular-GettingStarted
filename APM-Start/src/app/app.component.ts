import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">

    <div class="navbar-header">

      <a class="navbar-brand" href="#">{{pageTitle}}</a>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/welcome']" >Home</a></li>
        <li><a [routerLink]="['/products']" >Product List</a></li>
      </ul>
    </div>
    </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'LL Product Management';
}