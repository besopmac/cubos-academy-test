import { ImSearch } from 'react-icons/im';
import styles from './../Search/Search.module.scss';

export const Search = () => {
  return (
    <>
      <div className={styles.search}>
        <ImSearch className={styles.searchIcon} />
        <input type="text" placeholder="Busque pelo nome, ano ou gênero" />
      </div>
    </>
  );
};
