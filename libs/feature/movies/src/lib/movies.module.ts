import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './list/movies-list.component';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { ApiMoviesModule } from '@my-movies/api/movies';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './+state/movies.effects';
import { MoviesFacade } from './+state/movies.facade';
import { moviesFeature } from './+state/movies.reducer';
import { UiKitModule } from '@my-movies/shared/ui-kit';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesEditDialogComponent } from './edit-dialog/movies-edit-dialog.component';
import { CdkTableModule } from '@angular/cdk/table';

const COMPONENTS = [
  MoviesComponent,
  MoviesListComponent,
  MoviesEditDialogComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ApiMoviesModule,
    StoreModule.forFeature(moviesFeature),
    EffectsModule.forFeature(MoviesEffects),
    UiKitModule,
    ReactiveFormsModule,
    CdkTableModule,
  ],
  exports: [...COMPONENTS],
  providers: [MoviesFacade],
})
export class MoviesModule {}
