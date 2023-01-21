import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card-body',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardBodyComponent {
  @HostBinding('class.ui-card-body') readonly hostClass = true;
}
