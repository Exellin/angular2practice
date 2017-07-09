import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  index(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('media_items', { search: searchParams })
      .map(response => response.json());
  }

  get(mediaItemId) {
    return this.http.get(`media_items/${mediaItemId}`, mediaItemId)
      .map(response => response.json());
  }

  add(mediaItem) {
    return this.http.post('media_items', mediaItem)
      .map(response => {});
  }

  update(id, mediaItem) {
    return this.http.patch(`media_items/${id}`, mediaItem)
      .map(response => {});
  }

  delete(mediaItem) {
    return this.http.delete(`media_items/${mediaItem.id}`)
      .map(response => {});
  }
}

