import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import templateString from './media-item-list.component.html';
import './media-item-list.component.scss';

import {MediaItemService } from '../media-item/media-item.service';

@Component({
  selector: 'media-item-list',
  template: templateString
})

export class MediaItemListComponent {
  medium = '';
  mediaItems = [];
  paramsSubscription;

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
        let medium = params['medium'];
        if (medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe;
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.index(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
