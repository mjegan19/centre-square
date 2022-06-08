import styles from './Layout.module.scss';

import NavBar from "./NavBar";
import Footer from './Footer';
import Ruler from './Ruler';
import Container from '../ui/Container';

function Layout(props) {
  return (
    <Container className={styles.app}>
      <NavBar />
      <Ruler />
      <main>
        {props.children}
      </main>
      <Ruler />
      <Footer />
    </Container>
  );
}

export default Layout;