import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import templateString from './media-item-form.component.html';
import './media-item-form.component.scss';

import { MediaItemService } from '../media-item/media-item.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'media-item-form',
  template: templateString
})

export class MediaItemFormComponent {
  form;
  
  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control(''),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('')
    });
  }
  
  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem)
     .subscribe(
       (res) => {
         this.router.navigate(['/', mediaItem.medium]);
       },
       (err) => {
         var messages = err.json();
         console.log(messages);
         messages.forEach((message) => {
           this.form.controls[message.property].setErrors({
             remote: message.message });
           });
         }
     );
  }
}