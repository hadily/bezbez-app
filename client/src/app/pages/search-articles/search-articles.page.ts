import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.page.html',
  styleUrls: ['./search-articles.page.scss'],
})
export class SearchArticlesPage implements OnInit {

  items: any[] = [
    { item_id: 1, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: true },
    { item_id: 2, path: '../../../assets/images/item-2.jpeg', name: 'Earrings', price: '20 DT', liked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
