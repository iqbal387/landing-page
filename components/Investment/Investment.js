import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./Investment.module.css";

const Investment = () => {
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
      <section className={styles.investment}>
        {isVisible && (
          <>
            <div className={styles.investment__box}>
              <h2>Total Investment sale from last year transaction</h2>
              <p className={`${styles.investment__description} text_secondary`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                suscipit enim, blanditiis impedit incidunt quos! Explicabo
                mollitia fugit blanditiis, maiores laboriosam accusamus, eum
                expedita veniam eos sunt sit repellat! Sequi?
              </p>
            </div>
            <div className={styles.investment__box}>
              <Image
                src="/images/photograph.svg"
                alt="photograph"
                width={size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200}
                height={size.width >= 768 ? 500 : size.width >= 600 ? 250 : 200}
              />
            </div>
          </>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Investment;
