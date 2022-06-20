import cartaz from './../../assets/images/cartaz.png';
import styles from './../Flyer/Flyer.module.scss';

export const Flyer = () => {
  return (
    <div className={styles.flyer}>
      <img src={cartaz} alt="" />
    </div>
  );
};
