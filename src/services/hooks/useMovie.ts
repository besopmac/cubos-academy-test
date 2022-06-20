import { useEffect, useState } from 'react';
import { Movie } from '../../models/MovieModel';
import { api } from '../api';

export function useMovie(movieId: number) {
  const [state, setState] = useState<Movie>();
  return state;
}
