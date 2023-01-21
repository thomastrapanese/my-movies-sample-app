import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiDialogComponent } from './components/ui-dialog/ui-dialog.component';
import { UiDialogBodyComponent } from './components/ui-dialog/ui-dialog-body.component';
import { UiDialogActionsComponent } from './components/ui-dialog/ui-dialog-actions.component';
import { UiDialogHeaderComponent } from './components/ui-dialog/ui-dialog-header.component';
import { UiInputFileComponent } from './components/ui-input-file/ui-input-file.component';
import { UiImagePreloadDirective } from './directive/ui-image-preload.directive';
import { DialogModule } from '@angular/cdk/dialog';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { UiCardBodyComponent } from './components/ui-card/ui-card-body.component';
import { UiCardActionsComponent } from './components/ui-card/ui-card-actions.component';
import { UiCardHeaderComponent } from './components/ui-card/ui-card-header.component';
import { UiGridComponent } from './components/ui-grid/ui-grid.component';
import { UiGridColumnComponent } from './components/ui-grid/ui-grid-column.component';
import { CdkTableModule } from '@angular/cdk/table';
import { UiGridCellTemplateDirective } from './components/ui-grid/ui-grid-cell-template.directive';
import { UiGridCardTemplateDirective } from './components/ui-grid/ui-grid-card-template.directive';
import { UiDataListComponent } from './components/ui-data-list/ui-data-list.component';
import { UiDataListItemComponent } from './components/ui-data-list/ui-data-list-item.component';
import { UiDataListTextComponent } from './components/ui-data-list/ui-data-list-text.component';

const COMPONENTS = [
  UiButtonComponent,
  UiInputComponent,
  UiDialogComponent,
  UiDialogBodyComponent,
  UiDialogActionsComponent,
  UiDialogHeaderComponent,
  UiInputFileComponent,
  UiCardComponent,
  UiCardBodyComponent,
  UiCardActionsComponent,
  UiCardHeaderComponent,
  UiGridComponent,
  UiGridColumnComponent,
  UiDataListComponent,
  UiDataListItemComponent,
  UiDataListTextComponent,
];
const DIRECTIVES = [
  UiImagePreloadDirective,
  UiGridCellTemplateDirective,
  UiGridCardTemplateDirective,
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, DialogModule, CdkTableModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class UiKitModule {}
