import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule, FormsModule, SharedModule, DetailRoutingModule
  ]
})
export class DetailModule { }