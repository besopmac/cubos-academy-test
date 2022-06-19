import { PopularityGraph } from '../PopularityGraph';
import styles from './../Info/Info.module.scss';

export const Info = () => {
  return (
    <article className={styles.info}>
      <header className={styles.header}>
        <h2>Titulo do Filme</h2>
        <PopularityGraph />
      </header>

      <main className={styles.sinopsys}>
        <h3>Sinopse</h3>
        <p>
          Thor está aprisionado do outro lado do universo, sem seu martelo, e se
          vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a
          destruição de seu lar e o fim da civilização asgardiana que está nas
          mãos de uma nova e poderosa ameaçam a terrível Hela. Mas primeiro ele
          precisa sobreviver a uma batalha de gladiadores que o coloca contra
          seu ex-aliado e vingador, o Incrível Hulk.
        </p>
      </main>

      <div className={styles.information}>
        <h3>Informações</h3>
        <div className={styles.grid}>
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
        </div>
      </div>

      <ul className={styles.badges}>
        <li>Ação</li>
        <li>Aventura</li>
        <li>Fantasia</li>
      </ul>
    </article>
  );
};
