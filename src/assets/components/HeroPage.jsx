import React from "react";
import styles from "./HeroPage.module.css";

export default function HeroPage() {
  return (
    <div className={styles.container}>
      {/* ======= Navbar ======= */}
      <header className={styles.navbar}>
        <div className={styles.logo}>GSY</div>

        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </nav>

        <button className={styles.btnPrimary}>Get Started</button>
      </header>

      {/* ======= Hero Section ======= */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Build Beautiful Web Experiences</h1>
          <p>
            i Design and develop responsive web applications that wil inspire and
            engage your audience.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>Get Started</button>
            <button className={styles.btnSecondary}>Learn More</button>
          </div>
        </div>

        <div className={styles.divHeroImage}>
          <div className={styles.heroImage}>
            <p><strong>--- Sanda Yusuf ---</strong></p>

          </div>
          
        </div>
      </section>
    </div>
  );
}