import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-dialog',
  templateUrl: './ui-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogComponent {
  @HostBinding('class.ui-dialog') readonly hostClass = true;
}
