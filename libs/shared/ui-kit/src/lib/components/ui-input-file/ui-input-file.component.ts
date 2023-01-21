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
import { BehaviorSubject, fromEvent, skip } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessorImpl } from '../base-control-value-accessor-impl';

@Component({
  selector: 'ui-input-file',
  templateUrl: './ui-input-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputFileComponent),
      multi: true,
    },
  ],
})
export class UiInputFileComponent
  extends BaseControlValueAccessorImpl
  implements AfterViewInit
{
  /**
   * @ignore
   */
  @HostBinding('class.ui-input-file') readonly hostClass = true;
  /**
   * @ignore
   */
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;
  /**
   * @ignore
   */
  @ViewChild('inputVisible') inputVisible?: ElementRef<HTMLInputElement>;
  @Input() label?: string;

  @Input() maxFiles?: number;

  /**
   * @ignore
   */
  files$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {
    super();
  }

  ngAfterViewInit() {
    if (!this.input) {
      throw new Error('Invalid input');
    }
    fromEvent(this.input.nativeElement, 'change').subscribe(() => {
      const file = this.input?.nativeElement.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.zone.run(() => {
            this.files$.next((reader.result as string) || undefined);
          });
        };
      } else {
        this.zone.run(() => {
          this.files$.next(undefined);
        });
      }
    });
    this.files$.pipe(skip(1)).subscribe((file) => {
      if (this._firstWrite) {
        this._firstWrite = false;
        return;
      }
      if (file) {
        this.propagateChange(file);
      } else {
        this.propagateChange(undefined);
      }
      this.propagateTouched();
    });
  }

  chooseClickHandler() {
    if (!this.disabled$.value) {
      if (!this.input) {
        throw new Error('Invalid input');
      }
      (this.input.nativeElement as HTMLInputElement)?.showPicker();
    }
  }

  removeFileHandler() {
    this.files$.next(undefined);
  }

  focusHandler(e: FocusEvent) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    document.body.focus();
  }

  protected writeValueInternal(obj: string | undefined) {
    this.files$.next(obj);
  }
}
