import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-card-header',
  template: ` <img [src]="image" default="/assets/image-404.png" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardHeaderComponent {
  @HostBinding('class.ui-card-header') readonly hostClass = true;

  @Input() image?: string;
}
