import styles from "./Footer.module.css"
import logo from "../assets/images/logo.png"

function Footer() {
  return (
      <div className={styles.container}>
        <form onSubmit={e => e.preventDefault()}>
          <img src={logo} alt='logo' className={styles.logo} />

          <div className={styles.linkContainer}>
            <a href='' >TikTok</a>
            <a href='' >Youtube</a>
            <a href='' >Discord</a>
            <a href='' >Contact</a>
          </div>

          <div className={'spaceGrow'}/>

          <div style={{flexDirection: 'column'}}>
            <div>GET IN THE TOASTER!!</div>
            <div>Get notified when the toast pops.</div>
          </div>

          <div className={'spaceSmall'}/>
          <input type='email' placeholder='Email' />
          <div className={'spaceSmall'}/>
          <button type='submit'>Subscribe</button>
        </form>
        <div className={styles.copyright}>
          &copy; Toast Games
        </div>
      </div>
  );
}

export default Footer;