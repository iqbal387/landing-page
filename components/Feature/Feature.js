import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Feature.module.css";

const features = [
  {
    icon: "/feature_icon_1.png",
    label: "Great Market Value",
    description:
      "The leading digital currency by market capitalization, has grown in value by more than 10 times.",
  },
  {
    icon: "/feature_icon_2.png",
    label: "Verified Mining",
    description:
      "Your mining rigs are already set up and running. As soon as you set up your account.",
  },
  {
    icon: "/feature_icon_3.png",
    label: "Fastest Miner",
    description:
      "Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining.",
  },
  {
    icon: "/feature_icon_4.png",
    label: "Secure Transactions",
    description:
      "You can mine any cryptocurrency available in our catalogue! Switch your mining power.",
  },
];

const Feature = () => {
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
          <div className={styles.feature}>
            <h2>Why you choose TheCoin</h2>

            <p
              className={`${styles.feature__title_description} text_secondary`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
              Lorem ipsum dolor Lorem ipsum dolor
            </p>

            <div className={styles.feature__list}>
              {features && features.length
                ? features.map(({ icon, label, description }, index) => (
                    <div className={styles.feature__list_item} key={index}>
                      <Image src={icon} alt={label} width={90} height={80} />

                      <h6 className={styles.feature__label}>{label}</h6>

                      <p
                        className={`${styles.feature__description} text_secondary`}
                      >
                        {description}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Feature;
