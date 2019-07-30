import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  filteredProducts: any[] = [];
  orderTotal: number;

  constructor() { }

  ngOnInit() {
    
  }

}
