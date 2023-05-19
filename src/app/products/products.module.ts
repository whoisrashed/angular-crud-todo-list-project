import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolverService } from './services/product-resolver.service';

const routes:Routes =[
  {
    path:'',  //domain/product
    component:ProductsComponent
  },
  {
    path:'detail/:id',  //domain/product/detail
    resolve :{
      product: ProductResolverService
    },
    component:ProductDetailsComponent,
  
  }
]


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
