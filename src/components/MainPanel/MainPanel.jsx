import styles from './MainPanel.module.css'
import { barsAmountsArray, casesArray } from '../../utils/arrays'
import { ValueBar } from '../ValueBar/ValueBar'
import { Case } from '../Case/Case'
import { MiddlePanel } from '../MiddlePanel/MiddlePanel'
// import { GameRules } from '../GameRules/GameRules'
import man2_img from '../../assets/man2.png'

export function MainPanel() {
	const mappedBars = barsAmountsArray.map(amount => <ValueBar key={amount} value={amount}></ValueBar>)

	const cases = casesArray.map((el, index) => <Case key={index} value={el}></Case>)

	return (
		<>
			<div className={styles.container}>
				<div className={styles.bars}>{mappedBars}</div>
				<div className={styles.cases_section}>{cases}</div>
				<MiddlePanel />
				<div className={styles.commentary_section}>
					<img className={styles.man} src={man2_img} alt='' />
					<div className={styles.comment_space}>
						<p>Komentarz prowadzącego</p>
					</div>
					<button className={styles.help_button}>zasady gry</button>
				</div>
			</div>
		</>
	)
}
