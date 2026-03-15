import Trailer from "./Trailer";
import Gallery from "./Gallery.jsx";
import SteamButton from "./SteamButton.jsx";
import styles from './Card.module.css'

function Card({title, subtitle, blurb, background, imagePath, imageCount = 0, trailerLink, steamLink}){

  return (
      <div style={{backgroundColor: background}}>
        <div className={styles.card}>

          <div className={styles.header}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>

          <Trailer link={trailerLink}/>

          <div>
            <SteamButton steamLink={steamLink}/>
          </div>

          <div className={styles.blurb}>
            {blurb}
          </div>

          <Gallery
              title={title}
              imageCount={imageCount}
              imagePath={imagePath}
          />

          <div className={styles.footer}>
            <a href={steamLink} >Steam</a>
            <a href='' >Presskit</a>
          </div>

        </div>
      </div>
  )
}

export default Card;