
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterMenuComponent } from './products-list/filter-menu.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    FilterMenuComponent
  ],
  imports: [
    CommonModule, FormsModule, ProductsRoutingModule
  ],
  exports: [
      ProductsComponent
    ]
})
export class ProductsModule { }
