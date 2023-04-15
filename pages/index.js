import { Spacer } from "@nextui-org/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../firebase/firebase";
// import SmoothScroll from "smooth-scroll";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/HeroSection";
import Navigation from "../components/Navigation/Navigation";
import CookieConsent from "react-cookie-consent";
import LoadingComponent from "../components/Others/Progress";
import Cookies from "../components/Others/Coockies";
import JsonData from "../data/data.json";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1200,
//   header: "[data-scroll-header]",
//   speedAsDuration: true,
// });

function App({data}) {
  const Gallery = lazy(() => import("../components/Gallery/Gallery"));
  const Offert = lazy(() => import("../components/Offert/Offert"));
  const Contact = lazy(() => import("../components/Contact/Contact"));
  // const app = initializeApp(firebaseConfig);
  // getAnalytics(app);


  return (
    <>
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
