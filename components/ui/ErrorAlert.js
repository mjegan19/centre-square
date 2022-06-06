import styles from './ErrorAlert.module.scss';

const AlertBar = ({ msg }) => {
  return (
    <div className={styles.box}>
      <p>{msg}</p>
    </div>
  )
}

export default AlertBar