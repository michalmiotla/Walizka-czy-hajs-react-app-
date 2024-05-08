import styles from './ValueBar.module.css'

export function ValueBar({ value }) {
	return (
		<div className={styles.bar}>
			<p>{value} zł</p>
		</div>
	)
}
