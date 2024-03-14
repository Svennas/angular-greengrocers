import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddComponent } from './items/add/add.component';
import { CartComponent } from './items/cart/cart.component';
import { StoreComponent } from './items/store/store.component';
import { ItemComponent } from './items/item/item.component';

import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './items/total/total.component';

@NgModule({
  declarations: [AppComponent, AddComponent, CartComponent, StoreComponent, ItemComponent, TotalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
