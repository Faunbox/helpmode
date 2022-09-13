import { Spacer } from "@nextui-org/react";
import { lazy, Suspense } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/HeroSection";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const Gallery = lazy(() => import("./components/Gallery/Gallery"));
  const Offert = lazy(() => import("./components/Offert/Offert"));
  const Contact = lazy(() => import("./components/Contact/Contact"));

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Wczytywanie...</div>}>
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

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
});
