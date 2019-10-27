import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items: [];
  @Output() emitter = new EventEmitter();

  itemClicked(item: JSON) {
    this.emitter.emit(item);
  }

}
