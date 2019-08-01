import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: IProduct[] = [];
  product: IProduct;

  constructor( private dataService: DataService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    
   
    this.dataService.getProduct(id).subscribe((product: IProduct) => {this.product = product});
  }

}
