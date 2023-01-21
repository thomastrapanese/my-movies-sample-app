import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { moviesActions } from './movies.actions';
import { moviesQuery } from '@my-movies/feature/movies';
import { select, Store } from '@ngrx/store';
import { MovieModel, MoviesService } from '@my-movies/api/movies';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly moviesService = inject(MoviesService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moviesActions.load),
      switchMap(() => this.moviesService.getAll()),
      map((list) => {
        const movies: Record<string, MovieModel> = {};
        list.forEach((v) => (movies[v.id] = v));
        return moviesActions.loadSuccess({ movies });
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(moviesActions.loadFailure({ error }));
      })
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moviesActions.save),
      withLatestFrom(this.store.pipe(select(moviesQuery.selectSelectedId))),
      switchMap(([action, id]) =>
        id
          ? this.moviesService.update(id, { ...action.movie })
          : this.moviesService.create({ ...action.movie })
      ),
      map((movie) => moviesActions.saveSuccess({ movie })),
      catchError((error) => {
        console.error('Error', error);
        return of(moviesActions.saveFailure({ error }));
      })
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moviesActions.delete),
      switchMap((action) => this.moviesService.delete(action.id)),
      map((id) => moviesActions.deleteSuccess({ id })),
      catchError((error) => {
        console.error('Error', error);
        return of(moviesActions.deleteFailure({ error }));
      })
    )
  );
}
