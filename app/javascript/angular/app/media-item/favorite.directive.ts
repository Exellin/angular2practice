import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[favorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}