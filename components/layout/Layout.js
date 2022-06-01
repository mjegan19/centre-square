import styles from './Layout.module.scss';

import NavBar from "./NavBar";

function Layout() {
  return (
    <div className={styles.app}>
      <NavBar />
    </div>
  );
}

export default Layout;