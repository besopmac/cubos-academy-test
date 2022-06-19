import { useQuery } from 'react-query';
import { api } from '../api';

type Movie = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export async function getMovies(): Promise<Movie[]> {
  const { data } = await api.get(`/discover/movie`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: 'pt-BR',
    },
  });

  const movies = data.results.map((movie: Movie) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  });

  return movies;
}

export function useMovies() {
  return useQuery('movies', getMovies, {
    staleTime: 10000, // 10 seconds
  });
}
