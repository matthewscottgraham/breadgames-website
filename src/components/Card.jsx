import {useState} from "react";
import styles from './Card.module.css'

function Card({title, blurb, imagePath, imageCount = 0, steamLink}){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState(null);

  const images = Array.from(
      {length: imageCount},
      (_, i) => `/screenshots/${imagePath}/${i}.png`);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  }

  return (
      <div className={styles.card}>

        <h2>{title}</h2>

        <div>{blurb}</div>

        <div className={styles.carousel}>
          <div className={styles.carouselTrack}
               style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${title} screenshot ${index}`}
                    className={styles.carouselImage}
                    loading='lazy'
                    onClick={() => setPopupIndex(index)}
                  />
                ))}
          </div>

          {images.length > 1 && (
              <>

                <button className={`${styles.arrow} ${styles.left}`} onClick={goToPrevious}>
                  prev
                </button>

                <button className={`${styles.arrow} ${styles.right}`} onClick={goToNext}>
                  next
                </button>

                <div className={styles.dots}>
                  {images.map((_, index) => (
                      <button
                        key={index}
                        className={index === currentIndex ? `${styles.dot} ${styles.activeDot}` : styles.dot}
                        onClick={()=>setCurrentIndex(index)}
                      />
                  ))}
                </div>
              </>
          )}
        </div>
        <div>
          <a
              href={steamLink}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.steamButton}
          >
            <img
                src="/images/steam-icon.svg"
                alt=""
                className={styles.steamIcon}
            />
            View on Steam
          </a>
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
      </div>
  )
}

export default Card;