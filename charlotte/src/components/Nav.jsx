import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navLink}>
            <Link href="/">HI/HOME</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/goodbye">GOODBYE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
