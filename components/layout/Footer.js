// Import Module Styles
import styles from './Footer.module.scss';

// Import Components
import Link from 'next/link';

function Footer() {

  const getCurrentDate = () => {
    return new Date().getFullYear();
  }

  return (
    <div className={styles.pageFooter}>
      <p>
        SITE DESIGN BY&nbsp;
        <span>
          <Link href="https://mixelwebsolutions.netlify.app/">
            <a>
              &#60;mixel&#62;
            </a>
          </Link>
        </span>
        &nbsp;WEB SOLUTIONS<br />COPYRIGHT &copy; {getCurrentDate()}</p>
    </div>
  );
}

export default Footer;