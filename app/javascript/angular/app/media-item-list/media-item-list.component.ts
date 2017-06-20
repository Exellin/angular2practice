import { Component } from '@angular/core';
import templateString from './media-item-list.component.html';
import './media-item-list.component.scss';

import {MediaItemService } from '../media-item/media-item.service'

@Component({
  selector: 'media-item-list',
  template: templateString
})

export class MediaItemListComponent {
  medium = '';
  mediaItems = [];
  constructor(private mediaItemService: MediaItemService) {}
  
  ngOnInit() {
    this.getMediaItems(this.medium);
  }
  
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
  
  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      })
  }
}
