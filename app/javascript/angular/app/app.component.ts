import { Component } from '@angular/core';
import templateString from './app.component.html'
import './app.components.scss'

@Component({
  selector: 'angular',
  template: templateString
})

export class AppComponent {
  onMediaItemDelete(mediaItem) {
    console.log("onMediaItemDelete called")
  }
  
  firstMediaItem = {
    id: 1,
    name: "Firebug", 
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: "1294166565384",
    isFavorite: false
  };
}
