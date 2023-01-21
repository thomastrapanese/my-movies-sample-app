import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiGridCard]',
})
export class UiGridCardTemplateDirective {
  constructor(public templateRef?: TemplateRef<any>) {}
}
