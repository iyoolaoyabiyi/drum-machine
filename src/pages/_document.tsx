import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
