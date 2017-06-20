import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import templateString from './media-item-form.component.html';
import './media-item-form.component.scss';

import { MediaItemService } from '../media-item/media-item.service'

@Component({
  selector: 'media-item-form',
  template: templateString
})

export class MediaItemFormComponent {
  form;
  
  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject('lookupListToken') public lookupLists) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    });
  }
  
  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null
    } else {
      return { 
        'year': {
          min: minYear,
          max: maxYear
        }
      }
    }
  }
  
  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}