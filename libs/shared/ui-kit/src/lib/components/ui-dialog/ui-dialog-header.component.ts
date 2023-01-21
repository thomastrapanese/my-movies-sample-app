import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-dialog-header',
  template: ` {{ title }} `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogHeaderComponent {
  @HostBinding('class.ui-dialog-header') readonly hostClass = true;

  @Input() title?: string;
}
