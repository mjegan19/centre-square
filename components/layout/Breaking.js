import styles from './Breaking.module.scss';

function BreakingNewsHeadline(props) {
  return (
    <div className={styles.focus}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  );
}

export default BreakingNewsHeadline;