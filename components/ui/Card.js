// Import Module Styles
import styles from './Card.module.scss';

function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}

export default Card;