import Button from "../Button/Button";

import styles from "./Nav.module.css";

const Nav = ({ handleMenuClicked, menuRef }) => (
  <nav className={styles.nav}>
    <div className="container">
      <div className={styles.nav__box}>
        <div className={styles.nav__logo}>iqbalh.dev</div>
        <div className={styles.nav__menus}>
          <div
            className={styles.nav__menu}
            onClick={() => handleMenuClicked(menuRef.homeRef)}
          >
            Home
          </div>
          <div
            className={styles.nav__menu}
            onClick={() => handleMenuClicked(menuRef.featureRef)}
          >
            Key Feature
          </div>
          <div
            className={styles.nav__menu}
            onClick={() => handleMenuClicked(menuRef.fundRef)}
          >
            Fund Raising
          </div>
          <div
            className={styles.nav__menu}
            onClick={() => handleMenuClicked(menuRef.locationRef)}
          >
            Locations
          </div>
          <div
            className={styles.nav__menu}
            onClick={() => handleMenuClicked(menuRef.faqRef)}
          >
            FAQ
          </div>
          <div className={styles.nav__button}>
            <Button>Try form free </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
