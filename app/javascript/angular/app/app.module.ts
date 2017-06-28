import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './media-item/favorite.directive';
import { CategoryListPipe } from './media-item-list/category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item/media-item.service';
import { MediaItemEditComponent } from './media-item-edit/media-item-edit.component';
import { lookupListToken, lookupLists } from './providers';
import { routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
    MediaItemEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
