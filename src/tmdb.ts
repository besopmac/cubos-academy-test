const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

const simpleFetch = async (endpoint: any) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const data = await req.json();
  return data;
};

export default {
  getIndexList: async () => {
    return [
      {
        slug: 'animacao',
        title: 'Animação',
        items: await simpleFetch(
          `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'aventura',
        title: 'Aventura',
        items: await simpleFetch(
          `/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'acao',
        title: 'Ação',
        items: await simpleFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedia',
        title: 'Comédia',
        items: await simpleFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await simpleFetch(
          `/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentario',
        title: 'Documentario',
        items: await simpleFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await simpleFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'familia',
        title: 'Família',
        items: await simpleFetch(
          `/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'fantasia',
        title: 'Fantasia',
        items: await simpleFetch(
          `/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'faroeste',
        title: 'Faroeste',
        items: await simpleFetch(
          `/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'ficcao',
        title: 'Ficção Científica',
        items: await simpleFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'guerra',
        title: 'Guerra',
        items: await simpleFetch(
          `/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'historia',
        title: 'História',
        items: await simpleFetch(
          `/discover/movie?with_genres=36&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'misterio',
        title: 'Mistério',
        items: await simpleFetch(
          `/discover/movie?with_genres=9648&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'musica',
        title: 'Música',
        items: await simpleFetch(
          `/discover/movie?with_genres=10402&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await simpleFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'terror',
        title: 'Terror',
        items: await simpleFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'thriller',
        title: 'Thriller',
        items: await simpleFetch(
          `/discover/movie?with_genres=53&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
};
