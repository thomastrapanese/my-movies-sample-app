import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../model/movie.model';

@Injectable()
export abstract class MoviesService {
  abstract getAll(): Observable<MovieModel[]>;

  abstract getOne(id: string): Observable<MovieModel | undefined>;

  abstract create(model: Omit<MovieModel, 'id'>): Observable<MovieModel>;

  abstract update(
    id: string,
    model: Omit<MovieModel, 'id'>
  ): Observable<MovieModel>;

  abstract delete(id: string): Observable<string>;
}
