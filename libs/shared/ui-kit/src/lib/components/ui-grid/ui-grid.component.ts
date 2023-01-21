import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';
import { UiGridColumnComponent } from './ui-grid-column.component';
import { map, Observable, startWith } from 'rxjs';
import { UiGridCardTemplateDirective } from './ui-grid-card-template.directive';

@Component({
  selector: 'ui-grid',
  templateUrl: './ui-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGridComponent<T> implements AfterContentInit {
  @HostBinding('class.ui-grid') readonly hostClass = true;

  @ContentChild(UiGridCardTemplateDirective)
  cardTemplate?: UiGridCardTemplateDirective;
  @ContentChildren(UiGridColumnComponent)
  columns?: QueryList<UiGridColumnComponent>;
  @Input() data?: T[];
  @Input() defaultMode: 'grid' | 'card' = 'grid';
  columnsKeys$?: Observable<string[]>;

  ngAfterContentInit() {
    this.columnsKeys$ = this.columns?.changes.pipe(
      startWith(this.columns),
      map((list: QueryList<UiGridColumnComponent>) =>
        list.toArray().map((v) => v.key || '')
      )
    );
  }
  @HostBinding('class.ui-grid-default-mode-grid') get defaultModeGrid() {
    return this.defaultMode === 'grid';
  }
  @HostBinding('class.ui-grid-default-mode-card') get defaultModeCard() {
    return this.defaultMode === 'card';
  }
}
