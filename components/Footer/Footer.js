import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import Button from "../Button/Button";

import styles from "./Footer.module.css";

const footers = [
  {
    title: "About Us",
    menus: [
      {
        label: "Support Center",
      },
      {
        label: "Customer Support",
      },
      {
        label: "About Us",
      },
      {
        label: "Copyright",
      },
      {
        label: "Popular Campaign",
      },
    ],
  },
  {
    title: "Our Information",
    menus: [
      {
        label: "Return Policy",
      },
      {
        label: "Privacy Policy",
      },
      {
        label: "Terms & Conditions",
      },
      {
        label: "Site Map",
      },
      {
        label: "Store Hours",
      },
    ],
  },
  {
    title: "My Account",
    menus: [
      {
        label: "Press inquiries",
      },
      {
        label: "Social media directories",
      },
      {
        label: "Images & B-roll",
      },
      {
        label: "Permissions",
      },
      {
        label: "Speaker requests",
      },
    ],
  },
  {
    title: "Policy",
    menus: [
      {
        label: "Application security",
      },
      {
        label: "Software principles",
      },
      {
        label: "Unwanted software policy",
      },
      {
        label: "Responsible supply chain",
      },
    ],
  },
];

const Footer = () => {
  // state
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <section>
        {isVisible && (
          <div className={styles.footer__list}>
            <div className={styles.footer__list_item}>
              <Button>iqbalh.dev</Button>
            </div>
            {footers && footers.length
              ? footers.map(({ title, menus }, index) => (
                  <div key={index} className={styles.footer__list_item}>
                    <div className={styles.footer__menu_category}>{title}</div>
                    {menus && menus.length
                      ? menus.map(({ label }, index) => (
                          <div key={index} className={styles.footer__menu}>
                            <a
                              href="#"
                              rel={label}
                              className={styles.footer__menu_link}
                            >
                              {label}
                            </a>
                          </div>
                        ))
                      : null}
                  </div>
                ))
              : null}
          </div>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Footer;
