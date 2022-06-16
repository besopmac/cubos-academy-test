import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';

import { Wrapper, Container } from '../globalStyles';

export function List() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Search />
        <MovieCard />
        <MovieCard />
        <Pagination />
      </Container>
    </Wrapper>
  );
}
