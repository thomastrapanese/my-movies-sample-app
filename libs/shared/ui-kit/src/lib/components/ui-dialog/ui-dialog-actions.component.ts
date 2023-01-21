import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-dialog-actions',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogActionsComponent {
  @HostBinding('class.ui-dialog-actions') readonly hostClass = true;
}
