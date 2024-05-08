import styles from './MainPanel.module.css'
import { barsAmountsArray } from '../../utils/arrays'
import { ValueBar } from '../ValueBar/ValueBar'

export function MainPanel() {
	const mappedBars = barsAmountsArray.map(amount => <ValueBar key={amount} value={amount}></ValueBar>)

	return (
		<div className={styles.container}>
			<div className={styles.bars}>{mappedBars}</div>
		</div>
	)
}
