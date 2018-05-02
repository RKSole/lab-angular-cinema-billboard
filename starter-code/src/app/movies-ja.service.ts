import { Injectable } from "@angular/core";
import movies from "../sample-movies";

interface Movie {
  id: number;
  title: string;
  poster: string;
  sypnosis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actor: Array<string>;
  hour: Array<string>;
  room: number;
}
@Injectable()
export class MoviesJaService {
  movies: Array<Movie> = [];

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.filter(e => e.id = id);
  }
  ngOnInit() {}
}
