import {
  Box,
  Item,
  Grid,
  Title,
  Badges,
  Sinopsys,
  Information,
} from './styles';
import { DonutGraph } from '../DonutGraph';

export const Info = () => {
  return (
    <Box>
      <Title>
        <h2>Homem Aranha - Sem volta para casa</h2>
        <DonutGraph />
      </Title>
      <Sinopsys>
        <h3>Sinopse</h3>
        <p>
          Thor está aprisionado do outro lado do universo, sem seu martelo, e se
          vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a
          destruição de seu lar e o fim da civilização asgardiana que está nas
          mãos de uma nova e poderosa ameaçam a terrível Hela. Mas primeiro ele
          precisa sobreviver a uma batalha de gladiadores que o coloca contra
          seu ex-aliado e vingador, o Incrível Hulk.
        </p>
      </Sinopsys>
      <Information>
        <h3>Informações</h3>
        <Grid>
          <p>
            <small>Situação</small>Lançado
          </p>
          <p>
            <small>Idioma</small>Inglês
          </p>
          <p>
            <small>Duração</small>2h10min
          </p>
          <p>
            <small>Orçamento</small>$ 180.000.000,00
          </p>
          <p>
            <small>Receita</small>$ 180.000.000,00
          </p>
          <p>
            <small>Lucro</small>$ 180.000.000,00
          </p>
        </Grid>
      </Information>
      <Badges>
        <Item>Ação</Item>
        <Item>Aventura</Item>
        <Item>Fantasia</Item>
      </Badges>
    </Box>
  );
};
