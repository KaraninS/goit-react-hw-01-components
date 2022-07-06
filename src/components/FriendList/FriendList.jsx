import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          <span
            className={isOnline ? styles.statusOnline : styles.statusOffline}
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
