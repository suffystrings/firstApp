import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../components/silders.module.css";

export default function Silders() {
  const slides = [
    {
      id: 1,
      title: "Build Modern Web Experiences",
      desc: "Empowering you with clean, creative, and responsive web solutions.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Design with Purpose",
      desc: "We craft every detail to tell your brand's story beautifully.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 3,
      title: "Create. Inspire. Innovate.",
      desc: "Turning your ideas into stunning digital realities.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <div className={styles.heroContainer}>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <img src={slide.img} alt={slide.title} className={styles.image} />
            <div className={styles.overlay}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className={styles.btn}>Get Started</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
