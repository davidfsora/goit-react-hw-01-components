import { PropTypes } from 'prop-types';
import styles from "./TransactionHistory.module.css";

export function TransactionHistory({ items }) {
	return (
		<table className={styles.transactionhistory}>
			<thead>
				<tr>
					<th className={styles.tablehead}>Type</th>
					<th className={styles.tablehead}>Amount</th>
					<th className={styles.tablehead}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{
					items.map(item => {
						return (<tr className={styles.item} key={item.id}>
							<td className={styles.tabledata}>{item.type}</td>
							<td className={styles.tabledata}>{item.amount}</td>
							<td className={styles.tabledata}>{item.currency}</td>
						</tr>)
					})
				}
			</tbody>
		</table>
	);
}

TransactionHistory.propTypes = {
	items: PropTypes.array,
}

