import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles['header-container']}>
      <h1 className={styles['title']}>Maiby Tipping</h1>
      <p className={styles['subtitle']}>そんな気にせず、70%でもいいじゃないか</p>
    </header>
  );
};

export default Header;
