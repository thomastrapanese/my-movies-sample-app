import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-data-list-item',
  template: `
    <strong class="ui-data-list-label">{{ label }}:&nbsp;</strong>
    <div class="ui-data-list-spacer"></div>
    <span class="ui-data-list-value">{{ value }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataListItemComponent {
  @HostBinding('class.ui-data-list-item') readonly hostClass = true;
  @Input() label?: string;
  @Input() value?: string | number;
}
