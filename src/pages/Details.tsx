import { Info } from '../components/Info';
import { Video } from '../components/Video';
import { Header } from '../components/Header';
import { Wrapper, Container, Grid } from '../globalStyles';
import { Flyer } from '../components/Flyer';

export function Details() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Grid>
          <Info />
          <Flyer />
          <Video />
        </Grid>
      </Container>
    </Wrapper>
  );
}
