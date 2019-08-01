import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string;
  items: IProduct[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title= 'Our Products';
    this.dataService.getProducts()
      .subscribe((products: IProduct[]) => this.items = products);
  }

}
