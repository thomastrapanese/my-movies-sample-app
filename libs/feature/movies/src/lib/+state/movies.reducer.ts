import { createFeature, createReducer, on } from '@ngrx/store';

import { moviesActions } from './movies.actions';
import { moviesInitialState } from './movies.state';

export const moviesFeature = createFeature({
  name: 'movies',
  reducer: createReducer(
    moviesInitialState,
    on(
      moviesActions.load,
      moviesActions.save,
      moviesActions.delete,
      (state) => ({
        ...state,
        loading: true,
        error: undefined,
      })
    ),
    on(
      moviesActions.loadFailure,
      moviesActions.saveFailure,
      moviesActions.deleteFailure,
      (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      })
    ),
    on(moviesActions.loadSuccess, (state, action) => ({
      ...state,
      loading: false,
      loaded: true,
      error: undefined,
      movies: action.movies,
    })),
    on(moviesActions.saveSuccess, (state, action) => ({
      ...state,
      loading: false,
      error: undefined,
      movies: { ...state.movies, [action.movie.id]: action.movie },
    })),
    on(moviesActions.deleteSuccess, (state, action) => {
      const movies = { ...state.movies };
      delete movies[action.id];
      return {
        ...state,
        loading: false,
        movies,
      };
    }),
    on(moviesActions.select, (state, action) => {
      return {
        ...state,
        selectedId: action.id,
      };
    })
  ),
});
