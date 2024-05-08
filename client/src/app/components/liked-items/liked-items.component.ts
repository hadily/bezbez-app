import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-items',
  templateUrl: './liked-items.component.html',
  styleUrls: ['./liked-items.component.scss'],
})
export class LikedItemsComponent  implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
