import { Component, inject } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  itemService = inject(ItemsService);

  items: Item[] = [];

  async ngOnInit() {
    this.items = await this.itemService.items;
    console.log(this.items);
  }

  getImageSrc(imageSrc: string) {
    let src = "../../../assets/icons/"
    src += imageSrc + ".svg";
    return src;
  }

  async addItemToCart(item: Item) {
    this.itemService.addItemToCart(item);
  }
}
