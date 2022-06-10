// Import Module Styles
import styles from './NewsItem.module.scss';

// Import Components
import Card from '../ui/Card';

function NewsItem(props) {

  return (
    <Card>
      <div className={styles.image}>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        <button>
          <a href={props.articleLink} target="_blank" rel="noreferrer">Open Article &#62;&#62;</a>
        </button>
      </div>
    </Card>
  );
}

export default NewsItem;