import styles from './MiddlePanel.module.css'
// import { AcceptedOffer } from '../AcceptedOffer/AcceptedOffer'
import { LastChoice } from '../LastChoice/LastChoice'
// import { BankOffer } from '../BankOffer/BankOffer'
export function MiddlePanel() {
	return (
		<div className={styles.container}>
			<LastChoice />
		</div>
	)
}
