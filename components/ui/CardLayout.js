// Import Module Styles
import styles from './CardLayout.module.scss';

function CardLayout(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default CardLayout;