import { Injectable, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  http = inject(HttpClient);

  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`));
  }

  cartOfItems: CartItem[] = []; 

  async addItemToCart(grocerie: Item) {
    let isItemInCart = false;
    this.cartOfItems.map((item) => {
      if (item.name === grocerie.name) {
        item.amount++
        isItemInCart = true;
    }})

    if (!isItemInCart) {
      const cartItem = {
        id: grocerie.id,
        name: grocerie.name,
        amount: 1,
        currentPrice: grocerie.price,
      };
      this.cartOfItems.push(cartItem);
    }
  }
}
