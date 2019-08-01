import { Component, OnInit, Input } from '@angular/core';


import { IProduct } from '../../shared/interfaces'; 
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})

export class ProductsListComponent implements OnInit {
  private _products: IProduct[] = [];
  @Input() get products(): IProduct[]{
    return this._products;
  }

  set products(value: IProduct[]){
    if(value) {
      this.filteredProducts = this._products = value;
    }
  }

  filteredProducts: any[] = []; 
  cartTotal: number;

  constructor(private sorterService: SorterService) { }

  ngOnInit() {
   
  }

  filter(data: string) {
    if(data){
      this.filteredProducts = this.products.filter((products: IProduct) =>
      {
        return products.product_category.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          products.product_name.toLowerCase().indexOf(data.toLowerCase()) > -1
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  
  sort(prop: string){
   this.sorterService.sort(this.filteredProducts, prop);
  }

}
