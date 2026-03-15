import styles from "./SteamButton.module.css";

function SteamButton({steamLink}){
  return (
    <div className={styles.buttonContainer}>
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
        Wishlist on Steam
      </a>
    </div>
  )
}

export default SteamButton;