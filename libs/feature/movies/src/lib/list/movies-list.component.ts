import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MoviesFacade } from '../+state/movies.facade';
import { MovieModel } from '@my-movies/api/movies';
import { MoviesEditDialogComponent } from '../edit-dialog/movies-edit-dialog.component';
import { take } from 'rxjs';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'movies-list',
  templateUrl: 'movies-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent {
  private readonly moviesFacade = inject(MoviesFacade);
  private readonly dialogService = inject(Dialog);
  moviesList$ = this.moviesFacade.moviesList$;
  private ref?: DialogRef<unknown, MoviesEditDialogComponent>;
  displayMode: 'grid' | 'card' = 'card';

  createHandler() {
    if (this.ref) this.ref.close();
    this.dialogService.open(MoviesEditDialogComponent);
  }

  editHandler(m: MovieModel) {
    if (this.ref) this.ref.close();
    this.moviesFacade.select(m.id);
    this.ref = this.dialogService.open(MoviesEditDialogComponent, {
      data: m,
      maxWidth: '95%',
      maxHeight: '95%',
      width: '800px',
      height: '700px',
    });
    this.ref.closed.pipe(take(1)).subscribe(() => {
      this.moviesFacade.select(undefined);
      this.ref = undefined;
    });
  }

  removeHandler(m: MovieModel) {
    this.moviesFacade.delete(m.id);
  }
}
