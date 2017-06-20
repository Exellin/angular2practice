import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  mediaItems;
  constructor(private http: Http) {}
  
  get() {
    return this.http.get('media_items.json')
      .map(response => {
        return response.json();
      });
  }
  
  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }
  
  delete(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}

