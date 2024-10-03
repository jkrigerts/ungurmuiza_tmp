"use client";

import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import styles from "./Album.module.css";

export default function Album({ heading, id, images }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + id,
      children: "a",
      bgOpacity: 0.9,
      showHideAnimationType: "fade",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <article className={styles.album}>
      <h2>{heading}</h2>
      <div className={`pswp-gallery ${styles.images}`} id={id}>
        {images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={id + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt="" />
          </a>
        ))}
      </div>
    </article>
  );
}
