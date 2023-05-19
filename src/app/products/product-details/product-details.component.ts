import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  id =1;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {



  }

  routeChange(){

    this.router.navigate(['/','products','detail',this.id++])
  }
  ngOnInit(): void {


   
    this.route.params.subscribe(res=>{
      console.log('obs', res)
    })
   
    this.route.queryParams.subscribe(res=>{
      console.log(res)
    })

   

    console.log('snap', this.route.snapshot.queryParams)

    console.log('snap', this.route.snapshot.params)

    this.product = this.route.snapshot.data['product'];
    // this.productService.getProduct(this.route.snapshot.params['id']).subscribe(res => {
    //   this.product = res;
    //   console.log(res)
    // })
  }

}
