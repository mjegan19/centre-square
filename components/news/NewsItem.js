import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './NewsItem.module.scss';
import Image from 'next/image';

function NewsItem(props) {
  // Programmatic Navigation
  const router = useRouter();

  function handleNavigate() {
    router.push('/' + props.id);
  }

  return (
    <Card>
      <div className={styles.image}>
        {
          props.imageUrl === null ?

            <img
              src="/public/images/no-image.jpg"
              alt={props.title}
            />

            :

            <img
              src={props.imageUrl}
              alt={props.title}
            />

        }
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.actions}>
        {
          props.image ? <button onClick={handleNavigate}>Show Details</button>
            : <button><a href={props.articleLink} target="_blank" rel="noreferrer">Open Article &#62;&#62;</a></button>
        }
      </div>
    </Card>
  );
}

export default NewsItem;