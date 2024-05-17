import styles from './ValueBar.module.css'

export function ValueBar({ value, openedCasesValues }) {
	const barValue = openedCasesValues.filter(c => c === value)

	return (
		<div className={`${barValue[0] ? styles.checked_bar : styles.bar}`}>
			<p>{value} zł</p>
		</div>
	)
}
