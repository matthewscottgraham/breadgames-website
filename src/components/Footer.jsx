import styles from "./Footer.module.css"
import logo from "../assets/images/logo.png"

function Footer() {
  return (
      <div className={styles.container}>
        <form onSubmit={e => e.preventDefault()}>
          <img src={logo} alt='logo' className={styles.logo} />
          <div className={'spaceGrow'}/>
          Join the mailing list for info on our games.
          <div className={'spaceSmall'}/>
          <input type='email' placeholder='Email' />
          <div className={'spaceSmall'}/>
          <button type='submit'>Submit</button>
        </form>
        <div className={styles.copyright}>
          &copy; Bread Games
        </div>
      </div>
  );
}

export default Footer;