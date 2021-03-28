import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./MobileApp.module.css";

const MobileApp = () => {
  // size
  const size = useWindowSize();

  // state
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <section className={styles.mobileApp}>
        {isVisible && (
          <>
            <div className={styles.mobileApp__box}>
              {size.width >= 768 && (
                <Image
                  src="/images/live_photo.svg"
                  alt="image 5"
                  width={
                    size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200
                  }
                  height={
                    size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200
                  }
                />
              )}
            </div>

            <div className={styles.mobileApp__box}>
              <h2>Our wallet is built for the cryptocurrency beginner</h2>

              <p className={`${styles.mobileApp__description} text_secondary`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
                Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit .
              </p>

              <div className={styles.mobileApp__list}>
                <div className={styles.mobileApp__item}>
                  <Image
                    src="/icon_1.png"
                    alt="icon_1"
                    width={24}
                    height={24}
                  />

                  <p className={styles.mobileApp__list_label}>
                    Secure transfers with verified Casinos.
                  </p>
                </div>

                <div className={styles.mobileApp__item}>
                  <Image
                    src="/icon_2.png"
                    alt="icon_2"
                    width={24}
                    height={24}
                  />

                  <p className={styles.mobileApp__list_label}>
                    Easily buy and sell CLV within the wallet
                  </p>
                </div>

                <div className={styles.mobileApp__item}>
                  <Image
                    src="/icon_3.png"
                    alt="icon_3"
                    width={24}
                    height={24}
                  />

                  <p className={styles.mobileApp__list_label}>
                    Pay as many as you want
                  </p>
                </div>
              </div>

              <div className={styles.mobileApp__buttons}>
                <div className={styles.mobileApp__button}>
                  <Image
                    src="/icon_4.png"
                    alt="icon_4"
                    width={14}
                    height={14}
                  />

                  <p className={styles.mobileApp__button_label}>App Store</p>
                </div>

                <div className={styles.mobileApp__button}>
                  <Image
                    src="/icon_5.png"
                    alt="icon_5"
                    width={14}
                    height={14}
                  />

                  <p className={styles.mobileApp__button_label}>Play Store</p>
                </div>
              </div>

              <p className={`${styles.mobileApp__note} text_secondary`}>
                *Windows app coming soon
              </p>
            </div>
          </>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default MobileApp;
