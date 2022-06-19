import axios from 'axios';
import { useEffect } from 'react';
import { api } from '../services/api';

export function Demo() {
  const API_URL = 'https://api.themoviedb.org/3';

  // FetchMovie
  const fetchMovies = async () => {
    const { data } = await api.get(`/discover/movie`, {
      params: { api_key: import.meta.env.VITE_TMDB_API_KEY },
    });

    console.log('data =>', data);
  };

  // Dispara API
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>API Demo</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}
