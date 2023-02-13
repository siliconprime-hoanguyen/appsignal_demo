import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface Page1Props {}

export function Page1(props: Page1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Page1!</h1>
    </div>
  );
}

export default Page1;
