import { BehaviorSubject } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseControlValueAccessorImpl
  implements ControlValueAccessor
{
  protected _firstWrite?: boolean;

  @HostBinding('class.ui-disabled')
  protected get isDisabled() {
    return this.disabled$.value;
  }

  disabled$ = new BehaviorSubject<boolean>(false);

  registerOnChange(fn: (val: unknown) => void): void {
    this.propagateChange = (val) => {
      this._firstWrite = false;
      fn(val);
    };
  }

  registerOnTouched(fn: () => void): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled$.next(isDisabled);
  }

  writeValue(obj: unknown): void {
    setTimeout(() => {
      this._firstWrite = true;
      this.writeValueInternal(obj);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected propagateChange: (val: unknown) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected propagateTouched = () => {};
  protected abstract writeValueInternal(obj: unknown): void;
}
