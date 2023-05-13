import { NextUIProvider, useSSR } from "@nextui-org/react";

import "../styles/App.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const { isBrowser } = useSSR();

  return (
    isBrowser && (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}

export default MyApp;
