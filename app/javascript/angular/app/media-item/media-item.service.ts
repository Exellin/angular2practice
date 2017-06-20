import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}
  
  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('media_items.json', { search: searchParams })
      .map(response => {
        return response.json();
      });
  }
  
  add(mediaItem) {
    return this.http.post('media_items', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`media_items/${mediaItem.id}`)
      .map(response => {});
  }
}

