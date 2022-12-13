import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const LoaderComponent = () => {
  return (
    <div className={styles.container}>
      <Circles
        className={styles.loader}
        type="Circles"
        color="#ffff00"
        height={85}
        width={85}
        timeout={4000}
      />
     
    </div>
  );
}