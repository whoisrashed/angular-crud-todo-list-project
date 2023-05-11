

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes:Routes =[

  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
   
  },

  {
    path:'home',
    component:HomeComponent,
   
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
   // component:ContactSupportComponent,
    loadComponent:()=>import('./contact-support/contact-support.component').then(x=>x.ContactSupportComponent)
  },
  {
    path:'products',
    loadChildren:()=>import('./products/products.module').then(x=>x.ProductsModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent,
   //redirectTo:''
  }
];


@NgModule({
  declarations: [
    AppComponent,
   // ContactSupportComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
