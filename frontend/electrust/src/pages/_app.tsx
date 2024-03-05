import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return <Component {...pageProps} />;
}
