import { MovieModel } from '@my-movies/api/movies';

export interface MoviesState {
  loading: boolean;
  loaded: boolean;
  error: string | undefined;
  movies: Record<string, MovieModel>;
  selectedId: string | undefined;
}

export const moviesInitialState: MoviesState = {
  loading: false,
  loaded: false,
  error: undefined,
  selectedId: undefined,
  movies: {},
};
