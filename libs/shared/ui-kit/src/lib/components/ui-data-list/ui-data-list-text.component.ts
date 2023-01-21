import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-data-list-text',
  template: `
    <strong class="ui-data-list-label">{{ label }}:&nbsp;</strong>
    <div class="ui-data-list-value">{{ text }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataListTextComponent {
  @HostBinding('class.ui-data-list-text') readonly hostClass = true;
  @Input() label?: string;
  @Input() text?: string;
}
