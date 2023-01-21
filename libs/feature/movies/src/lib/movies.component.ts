import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MoviesFacade } from './+state/movies.facade';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'movies',
  templateUrl: 'movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  private readonly moviesFacade = inject(MoviesFacade);
  constructor() {
    this.moviesFacade.load();
  }
}
