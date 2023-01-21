import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-dialog-body',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogBodyComponent {
  @HostBinding('class.ui-dialog-body') readonly hostClass = true;
}
