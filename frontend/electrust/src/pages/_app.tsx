import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "@/context/userContext";  // Import the UserProvider

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserProvider>
  );
}
