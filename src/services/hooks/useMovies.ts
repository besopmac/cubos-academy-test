import { useQuery } from 'react-query';
import { api } from '../api';

type Movie = {
  id: string;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
};

export async function getMovies(): Promise<Movie[]> {
  const { data } = await api.get('movies');

  const movies = data.movies.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
    };
  });

  return movies;
}

export function useMovies() {
  return useQuery('movies', getMovies, {
    staleTime: 1000 * 10, // 10 seconds
  });
}
