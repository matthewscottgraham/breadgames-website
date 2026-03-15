import styles from "./Gallery.module.css";
import {useState} from "react";

function Gallery({title, imageCount = 0, imagePath}) {
  const [popupIndex, setPopupIndex] = useState(null);

  const images = Array.from(
      {length: imageCount},
      (_, i) => `/screenshots/${imagePath}/${i}.png`);

  return (
      <div>
        <h3>Gallery</h3>
        <div className={styles.galleryContainer}>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`${title} screenshot ${index}`}
                    className={styles.screenshot}
                    loading='lazy'
                    onClick={() => setPopupIndex(index)}
                />
            ))}
        </div>

        {popupIndex !== null && (
            <div className={styles.popupOverlay} onClick={() => setPopupIndex(null)}>
              <img
                  src={images[popupIndex]}
                  alt={`${title} screenshot ${popupIndex + 1}`}
                  className={styles.popupImage}
                  onClick={e => e.stopPropagation()} // prevent closing when clicking image
              />
              <button className={styles.popupClose} onClick={() => setPopupIndex(null)}>
                ×
              </button>
            </div>
        )}
      </div>
  )
}

export default Gallery;