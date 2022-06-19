import { Badge } from '../Badge';
import { PopularityGraph } from '../PopularityGraph';

import styles from './../MovieCard/MovieCard.module.scss';
import cartaz from './../../assets/images/cartaz.jpg';

type Movie = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export const MovieCard = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
}: Movie) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div id={id} className={styles.card}>
      <div className={styles.flyer}>
        <img
          src={poster_path ? `${IMAGE_PATH}${poster_path}` : cartaz}
          alt={title}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          <PopularityGraph voteAverage={vote_average} />
          <h2>{title}</h2>
        </div>
        <p>{overview}</p>
        <p>
          <b>Lançamento:</b> {release_date}
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
