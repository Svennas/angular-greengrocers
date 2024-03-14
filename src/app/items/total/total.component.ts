import { Component, inject } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from 'src/app/models/item';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent {
  itemService = inject(ItemsService);

  items: Item[] = [];

  cartOfItems: CartItem[] = [];

  async ngOnInit() {
    this.items = await this.itemService.items;
    this.cartOfItems = await this.itemService.cartOfItems;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartOfItems.map((cartItem) => (
      this.items.map((item) => {
        if (cartItem.name === item.name) {
          totalPrice += cartItem.amount * item.price
        }
      })
    )
    );
    return (Math.round(totalPrice * 100) / 100).toFixed(2);
  }
}
