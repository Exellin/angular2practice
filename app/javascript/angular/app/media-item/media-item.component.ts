import { Component, Input } from '@angular/core';
import templateString from './media-item.component.html'
import './media-item.component.scss'

@Component({
  selector: 'media-item',
  template: templateString,
})

export class MediaItemComponent {
  @Input() mediaitem;
}


  