import { Movie } from './MovieModel';

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
