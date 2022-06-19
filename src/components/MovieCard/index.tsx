import { Badge } from '../Badge';
import { PopularityGraph } from '../PopularityGraph';

import styles from './../MovieCard/MovieCard.module.scss';
import cartaz from './../../assets/images/cartaz.jpg';

type Movie = {
  id: string;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
};

export const MovieCard = ({
  id,
  title,
  overview,
  popularity,
  poster_path,
}: Movie) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={styles.card}>
      <div className={styles.flyer}>
        <img
          src={poster_path ? `${IMAGE_PATH}${poster_path}` : cartaz}
          alt={title}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          {/* <span>{Math.floor(popularity) / 100}</span> */}
          <PopularityGraph />
          <h2>{title}</h2>
        </div>
        <p>{overview}</p>
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
