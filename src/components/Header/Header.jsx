import styles from'./Header.module.css';
import Logo from '../../assets/catchattLogo.jpeg';

export function Header(){
  return(
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <strong>CatChatt</strong>
        </div>
      </header>
    )
}