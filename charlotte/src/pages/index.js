import Head from "next/head";
import Me from "@/components/Me";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charlotte's portfolio</title>
        <meta name="description" content="Front end developer | Charlotte | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Me />
      </main>
    </>
  );
}
