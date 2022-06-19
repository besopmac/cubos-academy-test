import styles from './../Pagination/Pagination.module.scss';

export const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        <li className={styles.active}>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
};
