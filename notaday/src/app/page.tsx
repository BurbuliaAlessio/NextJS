import Image from "next/image";
import homeImg from "public/home.png";
import styles from "./page.module.scss";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
    {/* passo i'mmagine como parametro */}
    <Hero imgData={homeImg} title="Home" description="Perfect hero" />
    
    <main>
        <p>
          here main content
        </p>
    </main>
    </>
  );
}
