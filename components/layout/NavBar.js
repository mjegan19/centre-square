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
            <Link href="/sports/footy">
              <a><GiFootyField title='AFL' /></a>
            </Link>
            <Link href="/sports/basketball">
              <a><MdSportsBasketball title='Basketball' /></a>
            </Link>
            <Link href="/sports/cricket">
              <a><MdSportsCricket title='Cricket' /></a>
            </Link>
            <Link href="/sports/golf">
              <a><MdSportsGolf title='Golf' /></a>
            </Link>
            <Link href="/sports/racing">
              <a><MdSportsMotorsports title='Motorsport' /></a>
            </Link>
            <Link href="/sports/rugby">
              <a><MdSportsRugby title='Rugby' /></a>
            </Link>
            <Link href="/sports/soccer">
              <a><MdSportsSoccer title='Soccer' /></a>
            </Link>
            <Link href="/sports/tennis">
              <a><MdSportsTennis title='Tennis' /></a>
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