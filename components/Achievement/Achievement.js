import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Achievement.module.css";

const achievement = [
  {
    icon: "/achievement_icon_1.png",
    value: "75000+",
    label: "Awards",
  },
  {
    icon: "/achievement_icon_2.png",
    value: "80",
    label: "Million Customers",
  },
  {
    icon: "/achievement_icon_3.png",
    value: "9350+",
    label: "Community",
  },
  {
    icon: "/achievement_icon_4.png",
    value: "30000+",
    label: "Transactions",
  },
];

const Achievement = () => {
  // state
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <section className={styles.achievement}>
        {isVisible && (
          <>
            <div className={styles.achievement__box}>
              <div className={styles.achievement__list}>
                {achievement && achievement.length
                  ? achievement.map(({ icon, value, label }, index) => (
                      <div
                        className={styles.achievement__list_item}
                        key={index}
                      >
                        <Image src={icon} alt={value} width={45} height={45} />
                        <h2 className={styles.achievement__value}>{value}</h2>
                        <p
                          className={`${styles.achievement__label} text_secondary`}
                        >
                          {label}
                        </p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className={styles.achievement__box}>
              <h2>Our Largest Achievements</h2>
              <p
                className={`${styles.achievement__title_label} text_secondary`}
              >
                We have worked with some leading agencies around the globe and
                their appreciation is our main strength. In the modern
                cryptocurrency era, customer satisfaction is our main criteria.
              </p>
              <div className={styles.achievement__button}>See Our Stories</div>
            </div>
          </>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Achievement;
