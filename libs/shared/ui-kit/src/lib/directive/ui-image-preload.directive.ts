import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[default]',
})
export class UiImagePreloadDirective {
  @HostBinding('src') @Input() src?: string | null;
  @Input() default?: string;
  @HostBinding('class') className?: string;

  @HostListener('error')
  updateUrl() {
    this.src = this.default;
  }

  @HostListener('load')
  load() {
    this.className = 'image-loaded';
  }
}
