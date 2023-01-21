import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessorImpl } from '../base-control-value-accessor-impl';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    },
  ],
})
export class UiInputComponent
  extends BaseControlValueAccessorImpl
  implements AfterViewInit
{
  /**
   * @ignore
   */
  @HostBinding('class.ui-input') readonly hostClass = true;

  @ViewChild('input') input?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inputType?: 'number' | 'text' | 'textarea';
  @Input() min?: string;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {
    super();
  }

  ngAfterViewInit() {
    if (!this.input) {
      console.error('Invalid input');
      return;
    }
    fromEvent(this.input.nativeElement, 'blur').subscribe(() => {
      this.zone.run(() => {
        const event = new Event('blur', { cancelable: true });
        this.el.nativeElement.dispatchEvent(event);
        if (!event.defaultPrevented) {
          this.propagateTouched();
        } else {
          event.preventDefault();
        }
      });
    });
    fromEvent(this.input.nativeElement, 'input').subscribe(() => {
      this.zone.run(() => {
        this.propagateChange(this.input?.nativeElement.value);
      });
    });
  }

  writeValueInternal(obj: string | Date): void {
    if (this.input?.nativeElement && typeof obj === 'string')
      this.input.nativeElement.value = obj;
    if (this.input?.nativeElement && obj instanceof Date) {
      (this.input.nativeElement as HTMLInputElement).valueAsNumber =
        obj.getTime() - obj.getTimezoneOffset() * 60 * 1000;
    }
  }
}
