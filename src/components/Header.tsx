import styles from './Header.module.css';
import imgLogo from '../assets/images/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt="Logo todo list" />
    </header>
  );
}