import { Info } from '../components/Info';
import { Flyer } from '../components/Flyer';
import { Video } from '../components/Video';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';

import styles from './../assets/scss/Details.module.scss';

export function Details() {
  const params = useParams();

  return (
    <section className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <div className={styles.grid}>
          <Info />
          <Flyer />
          <Video />
        </div>
      </main>
    </section>
  );
}
