import styles from'./Header.module.css';
import Logo from '../../assets/catchattLogo.jpeg';

export function Header(){
  return(
      <header className={styles.header}>
          <img src={Logo} alt="" />
          <strong>CAtChatt</strong>
      </header>
    )
}