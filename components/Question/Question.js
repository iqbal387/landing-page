import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Question.module.css";

const questions = [
  {
    question: "How to contact with Customer Service?",
    answer:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .",
  },
  {
    question: "Website reponse taking time, how to improve?",
    answer:
      "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .",
  },
  {
    question: "New update fixed all bug and issues?",
    answer:
      "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .",
  },
];

const Question = ({ faqRef }) => {
  // state
  const [show, setShow] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (value) => {
    if (value && !isVisible) {
      setIsVisible(true);
    }
  };

  const handleListCollapse = (value) =>
    setShow((show) => (show === value ? null : value));

  return (
    <VisibilitySensor onChange={onChange}>
      <section ref={faqRef}>
        {isVisible && (
          <div className={styles.question}>
            <h2>Have Any Question ?</h2>

            <p className={`${styles.question__description} text_secondary`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
              Lorem ipsum dolor Lorem ipsum dolor
            </p>

            <div className={styles.question__list}>
              {questions.map(({ question, answer }, index) => (
                <div
                  key={index}
                  className={styles.question__list_item}
                  onClick={() => handleListCollapse(index)}
                >
                  <div className={styles.question__list_header}>
                    <p className={styles.question__list_label}>{question}</p>

                    <div className={styles.question__list_icon}>
                      <Image
                        src={
                          show === index
                            ? "/expand_less.svg"
                            : "/expand_more.svg"
                        }
                        alt="expand question"
                        width={24}
                        height={24}
                        className="text_secondary"
                      />
                    </div>
                  </div>

                  <p
                    className={`${styles.question__list_body} ${
                      show === index
                        ? styles.question__open
                        : styles.question__close
                    } text_secondary`}
                  >
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </VisibilitySensor>
  );
};

export default Question;
