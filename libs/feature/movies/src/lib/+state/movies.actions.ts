import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MovieModel } from '@my-movies/api/movies';

export const moviesActions = createActionGroup({
  source: 'Movies',
  events: {
    Load: emptyProps(),
    'Load Failure': props<{ error: string }>(),
    'Load Success': props<{ movies: Record<string, MovieModel> }>(),

    Save: props<{ movie: Omit<MovieModel, 'id'> }>(),
    'Save Failure': props<{ error: string }>(),
    'Save Success': props<{ movie: MovieModel }>(),

    Select: props<{ id: string | undefined }>(),

    Delete: props<{ id: string }>(),
    'Delete Failure': props<{ error: string }>(),
    'Delete Success': props<{ id: string }>(),
  },
});
