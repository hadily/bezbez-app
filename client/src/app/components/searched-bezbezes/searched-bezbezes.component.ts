import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searched-bezbezes',
  templateUrl: './searched-bezbezes.component.html',
  styleUrls: ['./searched-bezbezes.component.scss'],
})
export class SearchedBezbezesComponent  implements OnInit {

  @Input() bezbez: any;

  constructor() { }

  ngOnInit() {}

}
