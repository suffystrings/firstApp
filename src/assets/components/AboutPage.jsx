import React from "react";
import styles from "../components/aboutpage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* ===== Header Section ===== */}
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>
          We are passionate creators building modern web experiences through
          design and technology.
        </p>
      </header>

      {/* ===== Main Content ===== */}
      <section className={styles.content}>
        <div className={styles.textBlock}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower brands and individuals with clean, creative, and high-performing web
            solutions. We believe every project should tell a story and make a lasting impact online.
          </p>
        </div>

        <div className={styles.textBlock}>
          <h2>What We Do</h2>
          <p>
            We specialize in responsive websites, digital galleries, and interactive front-end applications.
            Every project is crafted with modern tools like React, Vite, and CSS Modules — ensuring top performance and style.
          </p>
        </div>

        <div className={styles.textBlock}>
          <h2>Our Vision</h2>
          <p>
            To blend art, creativity, and technology — building digital experiences that inspire, engage, and connect people around the world.
          </p>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Team Member"
            />
            <h3>Sanda Yusuf</h3>
            <p>Front-End Developer</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
              alt="Team Member"
            />
            <h3>Jane Doe</h3>
            <p>Graphic Designer</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Team Member"
            />
            <h3>Michael Lee</h3>
            <p>UI/UX Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
}