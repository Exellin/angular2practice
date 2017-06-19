import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[favorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @Input() set favorite(value) {
    this.isFavorite = value;
  }
}