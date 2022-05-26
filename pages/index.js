import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.homeContent}>
        <section className={styles.section}>
          <div className={styles.headerTexts}>
            <p className={styles.paragraphOne}>
              So, you want to travel to <br />
              <span>Space</span>
            </p>

            <p className={styles.paragraphTwo}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.exploreContainer}>
            <div className={styles.explore}>
              <h1>explore</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
