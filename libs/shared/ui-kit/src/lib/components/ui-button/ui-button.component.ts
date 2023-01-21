import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { AiButtonType } from './ui-button.model';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  /**
   * @ignore
   */
  @HostBinding('class.ui-button') readonly hostClass = true;

  @Input() text?: string;
  @HostBinding('class.ui-button-disabled')
  @Input()
  disabled?: boolean;

  @Input() buttonType: AiButtonType = 'primary';

  @HostBinding('class.ui-button-color-primary') get colorPrimary() {
    return this.buttonType === 'primary';
  }
  @HostBinding('class.ui-button-color-critical') get colorCritical() {
    return this.buttonType === 'critical';
  }

  clickHandler(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}
