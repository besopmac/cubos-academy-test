import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Wrapper, Container } from '../globalStyles';

export function List() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Search />
        <Card />
      </Container>
    </Wrapper>
  );
}
