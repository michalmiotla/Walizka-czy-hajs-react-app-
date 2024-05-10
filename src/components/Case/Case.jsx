import styles from './Case.module.css'
import case_img from '../../assets/case_img.png'

export function Case({ value }) {
	return (
		<div className={styles.case_container}>
			<img className={styles.case_img} src={case_img} alt='' />
			<button className={styles.case_button}>
				<p className={styles.case_number}>{value}</p>
			</button>
		</div>
	)
}
