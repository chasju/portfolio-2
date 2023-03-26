import "@/styles/globals.css";
// pages/_app.js
import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
