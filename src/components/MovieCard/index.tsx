import { Card, Image, Info, Title, Badges } from './styles';
import { DonutGraph } from '../DonutGraph';
import { Badge } from '../Badge';

import cartaz from './../../assets/images/miranha.jpg';

type CardProps = {
  image?: string;
};

export const MovieCard = ({ image }: CardProps) => {
  return (
    <Card>
      <Image>
        <img src={cartaz} alt="" />
      </Image>
      <Info>
        <Title>
          <DonutGraph />
          <h2>Título do Filme</h2>
        </Title>
        <p>
          Thor está aprisionado do outro lado do universo, sem seu martelo, e se
          vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a
          destruição de seu lar e o fim da civilização asgardiana que está nas
          mãos de uma nova e poderosa ameaçam a terrível Hela. Mas primeiro ele
          precisa sobreviver a uma batalha de gladiadores que o coloca contra
          seu ex-aliado e vingador, o Incrível Hulk.
        </p>
        <p>
          <b>Lançamento:</b> 25/10/2017
        </p>

        <Badges>
          <Badge />
          <Badge />
          <Badge />
        </Badges>
      </Info>
    </Card>
  );
};
