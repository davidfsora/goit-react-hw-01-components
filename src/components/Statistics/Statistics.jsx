import { PropTypes } from "prop-types";
import styles from './Statistics.module.css';

export function Statistics({ title, stats }) {
	return (
		<section className={styles.statistics}>
			<h2 className={styles.title}>{title}</h2>
			<ul className={styles.statlist}>
				{
					stats.filter((obj, index, self) => index === self.findIndex(o => o.label === obj.label))
					.map(stat => {
						return (<li className={styles.item} key={stat.id} style={{
						backgroundColor: ramdomColor()
					}}>
						<span className={styles.label}>{stat.label}</span>
						<span className={styles.percentage}>{stat.percentage + "%"}</span>
					</li>)})
				}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array,
};

function ramdomColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;	
}
