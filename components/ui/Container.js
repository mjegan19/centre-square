// Import Module Styles
import styles from './Container.module.scss';

function Container(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Container;