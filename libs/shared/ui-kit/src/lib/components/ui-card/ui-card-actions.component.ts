import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card-actions',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardActionsComponent {
  @HostBinding('class.ui-card-actions') readonly hostClass = true;
}
