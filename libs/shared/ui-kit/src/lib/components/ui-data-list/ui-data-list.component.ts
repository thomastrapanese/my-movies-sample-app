import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-data-list',
  templateUrl: './ui-data-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataListComponent {
  @HostBinding('class.ui-data-list') readonly hostClass = true;
}
