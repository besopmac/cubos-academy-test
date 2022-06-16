import { useEffect, useState } from 'react';
import tmdb from './tmdb';

type Movies = {
  slug: string;
  title: string;
  items: [];
};

export default () => {
  const [movieList, setMovieList] = useState<Movies[]>([]);

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await tmdb.getIndexList();
      setMovieList(list);
    };

    loadAllMovies();
  }, []);

  return (
    <section className="wrapper">
      <header>Melhores Filmes</header>
      <main>
        <section className="list">
          {movieList.map((item: any, index: number) => (
            <p key={index}>{item.title}</p>
          ))}
        </section>
      </main>
    </section>
  );
};
