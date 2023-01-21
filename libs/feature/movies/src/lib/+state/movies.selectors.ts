import { moviesFeature } from './movies.reducer';
import { createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';

const {
  selectMoviesState,
  selectError,
  selectLoading,
  selectLoaded,
  selectMovies,
  selectSelectedId,
} = moviesFeature;

const selectMoviesList = createSelector(selectMovies, (movies) =>
  Object.values(movies || {})
);
const selectSelectedMovie = createSelector(
  selectMovies,
  selectSelectedId,
  (movies, id) => (id ? movies[id] : undefined)
);

export const moviesQuery = {
  selectMoviesState,
  selectError,
  selectLoading,
  selectLoaded,
  selectMoviesList,
  selectSelectedMovie,
  selectSelectedId,
};
