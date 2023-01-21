import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';
import { MovieModel } from '../model/movie.model';
import { MoviesService } from '../api/movies.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MoviesLsImplService extends MoviesService {
  private readonly LS_KEY = 'movies';

  private getAllInternal(): MovieModel[] {
    const lsString = localStorage.getItem(this.LS_KEY);
    if (!lsString) return [];
    return JSON.parse(lsString) as MovieModel[];
  }

  private saveAllInternal(movies: MovieModel[]): void {
    const toStore = JSON.stringify(movies);
    localStorage.setItem(this.LS_KEY, toStore);
  }

  override getAll(): Observable<MovieModel[]> {
    try {
      const parse = this.getAllInternal();
      return of(parse);
    } catch (e) {
      return throwError(() => 'Unable to parse movies');
    }
  }

  override getOne(id: string): Observable<MovieModel | undefined> {
    return this.getAll().pipe(map((v) => v.find((v) => v.id === id)));
  }

  override create(model: Omit<MovieModel, 'id'>): Observable<MovieModel> {
    try {
      const parse = this.getAllInternal();

      const id = uuid();
      const newVal: MovieModel = {
        ...model,
        id,
      };

      parse.push(newVal);
      this.saveAllInternal(parse);
      return of(newVal);
    } catch (e) {
      return throwError(() => 'Unable to parse movies');
    }
  }

  override update(
    id: string,
    model: Omit<MovieModel, 'id'>
  ): Observable<MovieModel> {
    try {
      const parse = this.getAllInternal();

      const index = parse.findIndex((v) => v.id === id);
      if (index < 0)
        return throwError(() => 'Unable to find movie with id: ' + id);
      const newVal: MovieModel = {
        ...model,
        id: parse[index].id,
      };

      parse[index] = newVal;
      this.saveAllInternal(parse);
      return of(newVal);
    } catch (e) {
      return throwError(() => 'Unable to parse movies');
    }
  }

  override delete(id: string): Observable<string> {
    try {
      const parse = this.getAllInternal();

      const result = parse.filter((v) => v.id !== id);
      this.saveAllInternal(result);
      return of(id);
    } catch (e) {
      return throwError(() => 'Unable to parse movies');
    }
  }
}
