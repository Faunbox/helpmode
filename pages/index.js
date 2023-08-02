import { Spacer } from "@nextui-org/react";
import { Suspense } from "react";
import Hero from "../components/Hero/HeroSection";
import Navigation from "../components/Navigation/Navigation";
import CookieConsent from "react-cookie-consent";
import LoadingComponent from "../components/Others/Progress";
import Cookies from "../components/Others/Coockies";
import JsonData from "../data/data.json";
import Head from "next/head";
import dynamic from "next/dynamic";
import { firebaseConfig } from "../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App({ data }) {
  const Gallery = dynamic(() => import("../components/Gallery/Gallery"));
  const Offert = dynamic(() => import("../components/Offert/Offert"));
  const Contact = dynamic(() => import("../components/Contact/Contact"));
  const Footer = dynamic(() => import("../components/Footer/Footer"));
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  console.log(getAnalytics(app));

  return (
    <>
      <Head>
        <link rel="canonical" href="https://zywiec-laweta.pl" />
        <meta
          name="description"
          content="> 501 509 756 < | Pomoc drogowa Żywiec 24 godziny na dobę 7 dni w tygodniu. Nasz obszar działania to cała gmina Żywiec. Holowanie Żywiec, wypożyczalnia quadów, quady z dojazdem do klienta"
        />
        <meta
          name="keywords"
          content="laweta zywiec, laweta żywiec, holowanie żywiec, laweta Łodygowice, quad żywiec, pomoc drogowa zywiec, pomoc drogowa żywiec, najem quada żywiec, wypozyczenie quada żywiec, quad na godziny zywiec"
        />

        <meta name="author" content="Filip Sojecki" />
        <title>
          Pomoc drogowa 24/7 Żywiec i okolice | Laweta | Holowanie | Quad
        </title>
      </Head>
      <CookieConsent
        location="bottom"
        cookieName="ciasteczka"
        expires={30}
        overlay
        buttonText="Rozumiem, przejdz dalej"
        flipButtons="true"
      >
        <Cookies />
      </CookieConsent>
      <Navigation data={data.nav} />
      <Suspense fallback={<LoadingComponent />}>
        <Hero />
        <Spacer y={2} />
        <Offert />
        <Spacer y={2} />
        <Gallery data={data.images} />
        <Spacer y={2} />
        <Contact />
        <Spacer y={2} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

export async function getStaticProps() {
  const data = JsonData;

  return {
    props: {
      data,
    },
  };
}
