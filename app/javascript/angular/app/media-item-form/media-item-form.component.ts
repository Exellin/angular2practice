import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import templateString from './media-item-form.component.html';
import './media-item-form.component.scss';

@Component({
  selector: 'media-item-form',
  template: templateString
})

export class MediaItemFormComponent {
  form;
  
  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(),
      category: new FormControl(),
      year: new FormControl()
    });
  }
  
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}