import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import Button from "../Button/Button";

import styles from "./Time.module.css";

const countDownDate = new Date("May 02, 2021 00:00:00").getTime();

const Time = () => {
  // state
  const [date, setDate] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const countDown = setInterval(() => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(countDown);
    }

    setDate({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <section>
        {isVisible && (
          <div className={styles.time}>
            <h2>Discount will be end in:</h2>
            <div className={styles.time__list}>
              <div className={styles.time__list_item}>
                <div className={styles.time__value}>{date.days || "12"}</div>
                <div className={styles.time__label}>DAYS</div>
              </div>
              <div className={styles.time__seperate}>:</div>
              <div className={styles.time__list_item}>
                <div className={styles.time__value}>{date.hours || "21"}</div>
                <div className={styles.time__label}>HOURS</div>
              </div>
              <div className={styles.time__seperate}>:</div>
              <div className={styles.time__list_item}>
                <div className={styles.time__value}>{date.minutes || "56"}</div>
                <div className={styles.time__label}>MINUTES</div>
              </div>
              <div className={styles.time__seperate}>:</div>
              <div className={styles.time__list_item}>
                <div className={styles.time__value}>{date.seconds || "45"}</div>
                <div className={styles.time__label}>SECONDS</div>
              </div>
            </div>
            <Button>Pre-order now</Button>
          </div>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Time;
