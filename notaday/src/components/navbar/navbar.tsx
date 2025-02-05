import Link from "next/link"
import styles from "./navbar.module.scss"

const Navigation = () => {
    return (
        <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.link}><Link href={"/"}>Home</Link></li>
          <li className={styles.link}><Link href={"/performance"}>perfomance</Link></li>
          <li className={styles.link}><Link href={"/reliability"}>reliability</Link></li>
          <li className={styles.link}><Link href={"/scale"}>scale</Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;
