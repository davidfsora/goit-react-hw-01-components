import { PropTypes } from "prop-types";
import styles from './FriendList.module.css';

export function FriendList({ friends }) {
	return (
		<ul className={styles.friendlist}>
			{
				friends.map(friend => {
						return (<li className={styles.item} key={friend.id}>
							<span className={styles.status} style={{ backgroundColor: (friend.isOnline ? '#55e700' : '#ff5252')}}></span>
											<img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
											<p className={styles.name}>{friend.name}</p>
										</li>)
									})
			}
		</ul>
	);
}

FriendList.propTypes = {
	friends: PropTypes.array,
};

