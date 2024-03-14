import { Component, inject } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from 'src/app/models/item';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  itemService = inject(ItemsService);

  items: Item[] = [];

  cartOfItems: CartItem[] = [];

  async ngOnInit() {
    this.items = await this.itemService.items;
    this.cartOfItems = await this.itemService.cartOfItems;
  }

  getImageSrc(imageSrc: string) {
    let src = '../../../assets/icons/';
    src += imageSrc + '.svg';
    return src;
  }

  showAmountOfItem(itemName: string) {
    console.log(this.cartOfItems);
    let amount = 0;
    this.cartOfItems.map((item) => {
      if (item.name === itemName) {
        amount = item.amount;
      }
    });
    return amount;
  }

  reduceAmount(itemName: string) {
    this.cartOfItems.map((item) => {
      if (item.name === itemName) {
        item.amount--;
        if (item.amount === 0) {
          let index = this.cartOfItems.indexOf(item);
          this.cartOfItems.splice(index, 1);
        }
      }
    });
  }

  increaseAmount(itemName: string) {
    this.cartOfItems.map((item) => {
      if (item.name === itemName) {
        item.amount++;
      }
    });
  }
}
