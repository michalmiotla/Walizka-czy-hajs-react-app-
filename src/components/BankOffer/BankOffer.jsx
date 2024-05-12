import styles from './BankOffer.module.css'
import { HugeButton } from '../HugeButton/HugeButton'

export function BankOffer() {
	return (
		<div className={styles.container}>
			<div className={styles.offer}>
				<h2>Bank oferuje...</h2>
				<p>27.500zł</p>
			</div>
			<div className={styles.buttons}>
				<HugeButton>Gram dalej!</HugeButton>
				<HugeButton>Biorę hajs!</HugeButton>
			</div>
		</div>
	)
}
