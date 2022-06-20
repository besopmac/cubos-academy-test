import { Badge } from '../Badge';
import { PopularityGraph } from '../PopularityGraph';
import styles from './../MovieCard/MovieCard.module.scss';
import cartaz from './../../assets/images/cartaz.png';
import { Movie } from '../../models/MovieModel';
import { Link } from 'react-router-dom';

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
    <Link to={`details/${id}`} className={styles.card}>
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
    </Link>
  );
};
