import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./FundRaising.module.css";

const FundRaising = ({ fundRef }) => {
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
      <section className={styles.fundRaising} ref={fundRef}>
        {isVisible && (
          <>
            <div className={styles.fundRaising__box}>
              <Image
                src="/images/fashion_photoshoot.svg"
                alt="fashion photoshoot"
                width={size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200}
                height={size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200}
              />
            </div>
            <div className={styles.fundRaising__box}>
              <h2>Fund raising allocation</h2>
              <p
                className={`${styles.fundRaising__description} text_secondary`}
              >
                Temporibus ipsa eum expedita illum, ullam repudiandae impedit,
                accusantium nostrum architecto culpa nam dignissimos. Omnis
                dolor ab at laboriosam incidunt. Consequuntur, eum?
              </p>
            </div>
          </>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default FundRaising;
