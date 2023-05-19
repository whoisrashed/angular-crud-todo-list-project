

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  {
    path: '',
   // component: HomeComponent,
   redirectTo:'/home',
   pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    // component:ContactSupportComponent,
    loadComponent: () => import('./contact-support/contact-support.component').then(x => x.ContactSupportComponent)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(x => x.ProductsModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
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
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
