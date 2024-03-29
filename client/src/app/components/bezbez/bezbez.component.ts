import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bezbez',
  templateUrl: './bezbez.component.html',
  styleUrls: ['./bezbez.component.scss'],
})
export class BezbezComponent  implements OnInit {

  @Input() bezbez: any;

  constructor() { }

  ngOnInit() {}

}
