import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Location.module.css";

const Location = ({ locationRef }) => {
  // state
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <section ref={locationRef}>
        {isVisible && (
          <div className={styles.location}>
            <h2>More than 3 Bilion worldwide use</h2>
            <p className={`${styles.location__description} text_secondary`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
              Lorem ipsum dolor sit .
            </p>
            <p className={styles.location__label}>
              Licenced gambling countries
            </p>
            <div className={styles.location__list}>
              <div className={styles.location__list_item}>
                <Image
                  src="/language_1.png"
                  alt="language 1"
                  width={24}
                  height={24}
                />
                <p className={styles.location__list_label}>United Kingdom</p>
              </div>
              <div className={styles.location__list_item}>
                <Image
                  src="/language_2.png"
                  alt="language 2"
                  width={24}
                  height={24}
                />
                <p className={styles.location__list_label}>South Africa</p>
              </div>
              <div className={styles.location__list_item}>
                <Image
                  src="/language_3.png"
                  alt="language 3"
                  width={24}
                  height={24}
                />
                <p className={styles.location__list_label}>Spain</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Location;
