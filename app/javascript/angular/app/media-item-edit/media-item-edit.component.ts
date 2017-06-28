import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import templateString from './media-item-edit.component.html';

import { MediaItemService } from '../media-item/media-item.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'media-item-edit',
  template: templateString
})

export class MediaItemEditComponent {
  form;
  mediaItem;
  id;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']

    this.mediaItemService.get(this.id).subscribe(mediaItem => {
      this.mediaItem = mediaItem;
    });

    this.form = this.formBuilder.group({
      medium: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('')
    });
  }

  onEditSubmit(mediaItem) {
    this.mediaItemService.update(this.id, mediaItem)
     .subscribe(
       (res) => {
         this.router.navigate(['/', mediaItem.medium]);
       },
       (err) => {
         var messages = err.json();
         messages.forEach((message) => {
           this.form.controls[message.property].setErrors({
             remote: message.message });
           });
         }
     );
  }
}
