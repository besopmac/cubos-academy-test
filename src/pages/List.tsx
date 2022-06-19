import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';
import { useMovies } from '../services/hooks/useMovies';

import styles from './../assets/scss/List.module.scss';

export function List() {
  const { data, isLoading, isFetching, error } = useMovies();

  return (
    <section className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <Search />

        {isLoading ? (
          <div>carregando</div>
        ) : error ? (
          <div style={{ color: 'red' }}>error</div>
        ) : (
          <>
            {!isLoading && isFetching && <p>atualizando</p>}

            {data.map((item) => (
              <MovieCard key={item.id} />
            ))}

            <Pagination
              currentPage={1}
              onPageChange={() => {}}
              totalCountofRegisters={200}
            />
          </>
        )}
      </main>
    </section>
  );
}
