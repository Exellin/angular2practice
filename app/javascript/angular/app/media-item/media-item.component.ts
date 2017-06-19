import { Component, Input, Output, EventEmitter } from '@angular/core';
import templateString from './media-item.component.html';
import './media-item.component.scss';

@Component({
  selector: 'media-item',
  template: templateString
})

export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  
  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
