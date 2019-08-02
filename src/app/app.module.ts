import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

import { SharedModule } from './shared/shared.module';
import { DetailModule } from './detail/detail.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    DetailModule,
    AppRoutingModule,
    ProductsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
