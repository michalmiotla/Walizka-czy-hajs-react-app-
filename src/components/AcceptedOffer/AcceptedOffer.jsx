import styles from './AcceptedOffer.module.css'
import { HugeButton } from '../HugeButton/HugeButton'

export function AcceptedOffer() {
	return (
		<div className={styles.container}>
			<div className={styles.offer}>
				<h2>Twoja wygrana to...</h2>
				<p>27.500zł</p>
			</div>
			<div className={styles.game_summary}>
				<p>W wybranej przez Ciebie na starcie rozgrywki walizce znajdowała się kwota w wysokości 200.000 zł</p>
				<HugeButton>Zagraj ponownie!</HugeButton>
			</div>
		</div>
	)
}
