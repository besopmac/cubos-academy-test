import logo from './../../assets/images/logo.png';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="Melhores Filmes" />
      </Link>
    </header>
  );
};
