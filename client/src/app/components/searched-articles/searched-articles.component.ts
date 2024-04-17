import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searched-articles',
  templateUrl: './searched-articles.component.html',
  styleUrls: ['./searched-articles.component.scss'],
})
export class SearchedArticlesComponent  implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
