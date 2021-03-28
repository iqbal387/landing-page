import Button from "../Button/Button";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__box}>
          <div className={styles.nav__logo}>iqbalh.dev</div>
          <div className={styles.nav__menus}>
            <div className={styles.nav__menu}>Home</div>
            <div className={styles.nav__menu}>Key Feature</div>
            <div className={styles.nav__menu}>Fund Raising</div>
            <div className={styles.nav__menu}>Locations</div>
            <div className={styles.nav__menu}>FAQ</div>
            <div className={styles.nav__button}>
              <Button>Try form free </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
