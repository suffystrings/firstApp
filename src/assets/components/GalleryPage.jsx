import React, { useState } from "react";
import styles from "../components/gallerypage.module.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function GalleryPage() {
  // ===== Default images =====
  const [images, setImages] = useState([
    {
      id: 1,
      title: "web Appilication",
      url: "/images/img-1.jpg",
    },
    {
      id: 2,
      title: "Mobile Appilication",
      url: "/images/img-2.jpg",
    },
    {
      id: 3,
      title: "Graphics Designs",
      url: "/images/img-3.jpg",
    },
    {
      id: 4,
      title: "Photograhic",
      url: "/images/img-4.jpg",
    },
     {
      id: 5,
      title: "Music/Song Writting",
      url: "/images/img-5.jpg",
    },
  ]);

  // ===== Form states =====
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);



  return (
    <div className={styles.container}>
      {/* ===== Header ===== */}
      <header className={styles.header}>
        <h1>Services</h1>
        <p>Here are some services we offer at <strong>G S Y</strong></p>
      </header>

      {/* ===== Gallery Grid ===== */}
      <div className={styles.grid}>
        {images.map((img) => (
          <div key={img.id} className={styles.card}>
            <img src={img.url} alt={img.title} className={styles.image} />
            <div className={styles.info}>
            <h3 className={styles.imgTitle}>{img.title}</h3>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}