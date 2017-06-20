import { Component } from '@angular/core';
import templateString from './media-item-list.component.html';
import './media-item-list.component.scss';

import {MediaItemService } from '../media-item/media-item.service'

@Component({
  selector: 'media-item-list',
  template: templateString
})

export class MediaItemListComponent {
  mediaItems;
  constructor(private mediaItemService: MediaItemService) {}
  
  ngOnInit() {
    this.mediaItems = this.mediaItemService.get()
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
  
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
