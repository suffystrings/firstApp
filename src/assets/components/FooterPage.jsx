import React from "react";
import styles from "../components/footerpage.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ===== Logo Section ===== */}
      <div className={styles.brand}>
        <h2>SUFFY<span>Designs</span></h2>
        <p>Creative. Modern. Inspiring.</p>
      </div>

      {/* ===== Nav Links ===== */}
      <ul className={styles.nav}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/services">Services</a></li>
      </ul>

      {/* ===== Social Links ===== */}
      <div className={styles.socials}>
        <a href="#" aria-label="Facebook">
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="ri-twitter-x-fill"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="ri-instagram-fill"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>

      {/* ===== Copyright ===== */}
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} SUFFY Designs. All Rights Reserved.</p>
      </div>
    </footer>
  );
}