import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products$!: Observable<Product[]>;
  constructor(private productSerivice: ProductService) {

  }

  ngOnInit(): void {
    this.products$ = this.productSerivice.getProducts()
  }

}
