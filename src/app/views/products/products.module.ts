import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MobileComponent,
    TvComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
  constructor() {
    console.log('Products work')
  }
 }
