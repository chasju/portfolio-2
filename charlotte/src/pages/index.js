import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Nav() {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">HI/HOME</Link>
          </li>
          <li>
            <Link href="/projects">CHARLOTTE/PROJECTS</Link>
          </li>
          <li>
            <Link href="/goodbye">GOODBYE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Charlotte's portfolio</title>
        <meta name="description" content="Front end developer | Charlotte | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}></main>
    </>
  );
}
