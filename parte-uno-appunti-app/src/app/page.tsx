import homeImg from "public/home.png";
import styles from "./page.module.scss";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
    {/* passo i'mmagine como parametro */}
    <Hero imgData={homeImg} title="Home" description="Perfect hero"/>
    
    <main className={styles.main}>
        <p className={styles.content}>
          here main content
        </p>
    </main>
    </>
  );
}
