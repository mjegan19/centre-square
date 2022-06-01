import Link from 'next/link';
import styles from './NavBar.module.scss';

// Import React Icons
import { GiAbstract060 } from 'react-icons/gi';
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube } from 'react-icons/si';

function NavBar() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.pageLogo}>
        <Link href='/'>
          <a>
            <GiAbstract060 className={styles.logoIcon} /><span>CENTRE</span>SQUARE
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">
              <a>NEWS</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>PRIVACY</a>
            </Link>
          </li>
          <li className={styles.socials}>
            <Link href="https://www.facebook.com/">
              <a target="_blank"><SiFacebook /></a>
            </Link>
            <Link href="https://www.twitter.com/">
              <a target="_blank"><SiTwitter /></a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a target="_blank"><SiInstagram /></a>
            </Link>
            <Link href="https://www.youtube.com/">
              <a target="_blank"><SiYoutube /></a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;