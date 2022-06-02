import Link from 'next/link';
import styles from './NavBar.module.scss';

// Import React Icons
import { GiAbstract060 } from 'react-icons/gi';
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube } from 'react-icons/si';
import { MdSportsBasketball, MdSportsCricket, MdSportsGolf, MdSportsMotorsports, MdSportsRugby, MdSportsSoccer, MdSportsTennis } from 'react-icons/md';
import { GiFootyField } from 'react-icons/gi';

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
          <li className={`${styles.icons} ${styles.sports}`}>
            <Link href="/footy">
              <a target="_blank"><GiFootyField title='AFL' /></a>
            </Link>
            <Link href="/basketball">
              <a target="_blank"><MdSportsBasketball title='Basketball' /></a>
            </Link>
            <Link href="/cricket">
              <a target="_blank"><MdSportsCricket title='Cricket' /></a>
            </Link>
            <Link href="/golf">
              <a target="_blank"><MdSportsGolf title='Golf' /></a>
            </Link>
            <Link href="/racing">
              <a target="_blank"><MdSportsMotorsports title='Motorsport' /></a>
            </Link>
            <Link href="/rugby">
              <a target="_blank"><MdSportsRugby title='Rugby' /></a>
            </Link>
            <Link href="/soccer">
              <a target="_blank"><MdSportsSoccer title='Soccer' /></a>
            </Link>
            <Link href="/tennis">
              <a target="_blank"><MdSportsTennis title='Tennis' /></a>
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
          <li className={styles.icons}>
            <Link href="https://www.facebook.com/">
              <a target="_blank"><SiFacebook title='Facebook' /></a>
            </Link>
            <Link href="https://www.twitter.com/">
              <a target="_blank"><SiTwitter title='Twitter' /></a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a target="_blank"><SiInstagram title='Instagram' /></a>
            </Link>
            <Link href="https://www.youtube.com/">
              <a target="_blank"><SiYoutube title='YouTube' /></a>
            </Link>
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default NavBar;