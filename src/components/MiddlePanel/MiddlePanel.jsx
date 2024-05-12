import styles from './MiddlePanel.module.css'
// import { AcceptedOffer } from '../AcceptedOffer/AcceptedOffer'
import { LastChoice } from '../LastChoice/LastChoice'

export function MiddlePanel() {
	return (
		<div className={styles.container}>
			<LastChoice />
		</div>
	)
}
