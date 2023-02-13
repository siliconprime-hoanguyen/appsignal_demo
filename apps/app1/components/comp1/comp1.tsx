import styles from './comp1.module.scss';

/* eslint-disable-next-line */
export interface Comp1Props {}

export function Comp1(props: Comp1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Comp1!</h1>
    </div>
  );
}

export default Comp1;
