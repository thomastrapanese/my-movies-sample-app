import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../api/movies.service';
import { MoviesLsImplService } from './movies-ls-impl.service';

@NgModule({
  providers: [{ provide: MoviesService, useClass: MoviesLsImplService }],
})
export class ApiLsImplModule {}
