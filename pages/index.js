import { useRef } from "react";
import Head from "next/head";

import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Time from "../components/Time/Time";
import Feature from "../components/Feature/Feature";
import Achievement from "../components/Achievement/Achievement";
import Investment from "../components/Investment/Investment";
import FundRaising from "../components/FundRaising/FundRaising";
import Privacy from "../components/Privacy/Privacy";
import MobileApp from "../components/MobileApp/MobileApp";
import Location from "../components/Location/Location";
import Question from "../components/Question/Question";
import Footer from "../components/Footer/Footer";

const Home = () => {
  // ref
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const fundRef = useRef(null);
  const locationRef = useRef(null);
  const faqRef = useRef(null);

  const handleMenuClicked = (menuRef) => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={homeRef} className="body">
      <Head>
        <title>iqbalh.dev</title>

        <meta name="title" content="iqbalh.dev" />
        <meta name="subject" content="Portfolio" />
        <meta name="description" content="Portfolio Frontend Developer" />
        <meta name="format" content="text/html" />
        <meta name="publisher" content="Iqbal Hasan" />
        <meta name="language" content="en" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav
        handleMenuClicked={handleMenuClicked}
        menuRef={{
          homeRef,
          featureRef,
          fundRef,
          locationRef,
          faqRef,
        }}
      />
      <main className="container">
        <Banner />
        <Time />
        <Feature featureRef={featureRef} />
        <Achievement />
        <Investment />
        <FundRaising fundRef={fundRef} />
        <Privacy />
        <MobileApp />
        <Location locationRef={locationRef} />
        <Question faqRef={faqRef} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
