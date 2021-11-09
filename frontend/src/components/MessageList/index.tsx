import styles from './styles.module.scss'
import logoImg from '../../assets/logo.png'
export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/brunoleox.png" alt="Avatar" />
            </div>
            <span>Bruno Leonardo</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/brunoleox.png" alt="Avatar" />
            </div>
            <span>Bruno Leonardo</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/brunoleox.png" alt="Avatar" />
            </div>
            <span>Bruno Leonardo</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
