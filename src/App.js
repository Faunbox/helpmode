import { Link, Spacer, Text } from "@nextui-org/react";
import { lazy, Suspense } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase/firebase";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import CookieConsent from "react-cookie-consent";
import LoadingComponent from "./components/Others/Progress";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
});

function App() {
  const Gallery = lazy(() => import("./components/Gallery/Gallery"));
  const Offert = lazy(() => import("./components/Offert/Offert"));
  const Contact = lazy(() => import("./components/Contact/Contact"));
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)

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
        <Text color="white">
          Ta strona używa plików cookie, aby uzyskać szczegółowe informacje na
          temat przetwarzania Twoich danych osobowych, znajdują się one w
        </Text>
        <Link href="/privacy">
          <Text color="white">polityce prywatności.</Text>
        </Link>
      </CookieConsent>
      <Navigation />
      <Suspense fallback={<LoadingComponent />}>
        <Hero />
        <Spacer y={2} />
        <Offert />
        <Spacer y={2} />
        <Gallery />
        <Spacer y={2} />
        <Contact />
        <Spacer y={2} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
