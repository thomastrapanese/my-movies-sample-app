import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { moviesActions } from './movies.actions';
import { moviesQuery } from './movies.selectors';
import { MovieModel } from '@my-movies/api/movies';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesFacade {
  private readonly store = inject(Store);
  moviesList$: Observable<MovieModel[]> = this.store.pipe(
    select(moviesQuery.selectMoviesList)
  );
  selected$ = this.store.pipe(select(moviesQuery.selectSelectedMovie));

  load() {
    this.store.dispatch(moviesActions.load());
  }

  updateOrCreate(movie: Omit<MovieModel, 'id'>) {
    this.store.dispatch(moviesActions.save({ movie }));
  }

  delete(id: string) {
    this.store.dispatch(moviesActions.delete({ id }));
  }

  select(id: string | undefined) {
    this.store.dispatch(moviesActions.select({ id }));
  }
}
