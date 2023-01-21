import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiGridCell]',
})
export class UiGridCellTemplateDirective {
  constructor(public templateRef?: TemplateRef<any>) {}
}
