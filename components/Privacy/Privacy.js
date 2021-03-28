import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import useWindowSize from "../../hooks/useWindowSize";

import styles from "./Privacy.module.css";

const Privacy = () => {
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
      <section className={styles.privacy}>
        {isVisible && (
          <>
            <div className={styles.privacy__box}>
              <h2>Privacy Preserving Anonymous Funds Protocol</h2>
              <p className={`${styles.privacy__description} text_secondary`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                suscipit enim, blanditiis impedit incidunt quos! Explicabo
                mollitia fugit blanditiis, maiores laboriosam accusamus, eum
                expedita veniam eos sunt sit repellat! Sequi?
              </p>
            </div>
            <div className={styles.privacy__box}>
              <Image
                src="/images/image_folder.svg"
                alt="photo privacy"
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

export default Privacy;
