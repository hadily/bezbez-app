import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.scss'],
})
export class StoreItemsComponent  implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}
  
  toggleLike(item: any) {
    item.liked = !item.liked;
  }
}
