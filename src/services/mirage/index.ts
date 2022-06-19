import { createServer, Factory, Model, Response } from 'miragejs';

type Movie = {
  id: number;
  title: string;
  status: string;
  budget: number;
  revenue: number;
  runtime: number;
  overview: string;
  popularity: number;
  poster_path: string;
  spoken_languages: [];
  genres: [];
};

export function makeServer() {
  const server = createServer({
    models: {
      movie: Model.extend<Partial<Movie>>({}),
    },

    factories: {
      movie: Factory.extend({
        id(i: number) {
          return i + 1;
        },
        title(i: number) {
          return `Title ${i + 1}`;
        },
        status() {
          return 'Em cartaz';
        },
        budget() {
          return 1000;
        },
        revenue() {
          return 2000;
        },
        runtime() {
          return 1000;
        },
        overview() {
          return 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, praesentium?';
        },
        popularity() {
          return 9.0;
        },
        posterPath() {
          return '/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg';
        },
        spokenLanguages() {
          return ['English'];
        },
        genres() {
          return ['Action'];
        },
      }),
    },

    seeds(server) {
      server.createList('movie', 100);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/movies', function (schema, request) {
        const { page = 1, per_page = 5 } = request.queryParams;
        const total = schema.all('movie').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const movies = this.serialize(schema.all('movie')).movies.slice(
          pageStart,
          pageEnd,
        );

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { movies },
        );
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
