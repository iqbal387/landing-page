import Image from "next/image";

import styles from "./Banner.module.css";

import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";

const Banner = () => {
  // size
  const size = useWindowSize();

  return (
    <section className={styles.banner}>
      <div className={styles.banner__box}>
        <div className={styles.banner__discount}>
          <span className={styles.banner__discount_title}>25% Discount</span> on
          every first project
        </div>
        <h1 className={styles.banner__title}>
          Welcome to next level photography with image recognation
        </h1>
        <p className={styles.banner__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
          tempor incididunt labore dolore magna ipsum dolor sit amet
          consectetur.
        </p>
        <div className={styles.banner__button_box}>
          <div className={styles.banner__button}>
            <Button color="primary">Get Opportunity</Button>
          </div>
          <div className={styles.banner__button}>
            <Button color="secondary">Make Order</Button>
          </div>
        </div>
      </div>
      <div className={styles.banner__image}>
        {size.width >= 600 && (
          <Image
            src="/images/camera.svg"
            alt="camera"
            width={650}
            height={450}
          />
        )}
      </div>
    </section>
  );
};

export default Banner;
