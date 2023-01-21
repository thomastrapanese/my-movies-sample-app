import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  NgZone,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesFacade } from '../+state/movies.facade';
import { debounceTime, take } from 'rxjs';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'movies-edit',
  templateUrl: 'movies-edit-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesEditDialogComponent implements OnInit {
  private readonly moviesFacade = inject(MoviesFacade);
  private readonly dialogRef = inject(DialogRef);
  private readonly cdr = inject(ChangeDetectorRef);
  frm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    summary: new FormControl<string>(''),
    director: new FormControl<string>(''),
    year: new FormControl<number | null>(null, Validators.min(1895)),
    poster: new FormControl<string | null>(null),
  });

  ngOnInit() {
    this.moviesFacade.selected$.pipe(take(1)).subscribe((val) => {
      console.log(val);
      if (val) {
        this.frm.reset({ ...val });
      } else {
        this.frm.reset({});
      }
    });
    this.frm.statusChanges
      .pipe(debounceTime(0))
      .subscribe(() => this.cdr.detectChanges());
  }

  saveHandler() {
    this.frm.markAllAsTouched();
    if (this.frm.invalid || this.frm.pending) return;
    const frmVal = this.frm.getRawValue();
    this.moviesFacade.updateOrCreate({
      title: frmVal.title || '',
      summary: frmVal.summary || '',
      director: frmVal.director || '',
      year: frmVal.year || 0,
      poster: frmVal.poster || '',
    });
    this.dialogRef.close();
  }

  cancelHandler() {
    this.dialogRef.close();
  }
}
