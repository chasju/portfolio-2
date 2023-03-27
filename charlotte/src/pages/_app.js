import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Script src="https://kit.fontawesome.com/3f52b12258.js" />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
