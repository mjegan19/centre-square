// Import Module Styles
import styles from './ScoreBoard.module.scss';

function ScoreBoard(props) {

  var scoreBoard;

  // Conditional Background Image based on prop passed in.
  if (props.pageInfo === 'home') {
    scoreBoard =
      <div className={styles.home}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'about') {
    scoreBoard =
      <div className={styles.about}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'contact') {
    scoreBoard =
      <div className={styles.contact}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'privacy') {
    scoreBoard =
      <div className={styles.privacy}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'afl') {
    scoreBoard =
      <div className={styles.afl}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'basketball') {
    scoreBoard =
      <div className={styles.basketball}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'cricket') {
    scoreBoard =
      <div className={styles.cricket}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'golf') {
    scoreBoard =
      <div className={styles.golf}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'motorsport') {
    scoreBoard =
      <div className={styles.motorsport}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'rugby') {
    scoreBoard =
      <div className={styles.rugby}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'soccer') {
    scoreBoard =
      <div className={styles.soccer}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  } else if (props.pageInfo === 'tennis') {
    scoreBoard =
      <div className={styles.tennis}>
        <div className={styles.overlay} >
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>;
  }

  return (
    <div className={styles.frame}>
      {scoreBoard}
    </div>
  );
}

export default ScoreBoard;