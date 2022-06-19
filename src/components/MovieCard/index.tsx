import { Badge } from '../Badge';
import { PopularityGraph } from '../PopularityGraph';

import styles from './../MovieCard/MovieCard.module.scss';
import cartaz from './../../assets/images/cartaz.jpg';

export const MovieCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.flyer}>
        <img src={cartaz} alt="" />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          <PopularityGraph />
          <h2>Título do Filme</h2>
        </div>
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

        <ul className={styles.badges}>
          <Badge />
          <Badge />
          <Badge />
        </ul>
      </div>
    </div>
  );
};
