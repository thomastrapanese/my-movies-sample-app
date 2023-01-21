import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
} from '@angular/core';
import { UiGridCellTemplateDirective } from './ui-grid-cell-template.directive';

@Component({
  selector: 'ui-grid-col',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGridColumnComponent {
  @HostBinding('class.ui-grid-col') readonly hostClass = true;
  @Input() key?: string;
  @Input() title?: string;
  @Input() fitContent = false;
  @ContentChild(UiGridCellTemplateDirective)
  gridCellTemplate?: UiGridCellTemplateDirective;
}
