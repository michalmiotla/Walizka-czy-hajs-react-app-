import styles from './MainPanel.module.css'
import { barsAmountsArray, casesArray, sortedAmounts } from '../../utils/arrays'
import { ValueBar } from '../ValueBar/ValueBar'
import { Case } from '../Case/Case'
// import { MiddlePanel } from '../MiddlePanel/MiddlePanel'
import { GameRules } from '../GameRules/GameRules'
import man2_img from '../../assets/man2.png'
import { useState } from 'react'

export function MainPanel() {
	const [isHelpOpened, setIsHelpOpened] = useState(false)
	const [myCaseValue, setMyCaseValue] = useState(null)
	const [myCaseNumber, setMyCaseNumber] = useState(null)

	const mappedBars = barsAmountsArray.map(amount => <ValueBar key={amount} value={amount}></ValueBar>)

	const cases = casesArray.map((el, index) => (
		<Case
			key={index}
			number={el}
			value={sortedAmounts[index]}
			setMyCaseValue={setMyCaseValue}
			setMyCaseNumber={setMyCaseNumber}
			myCaseNumber={myCaseNumber}></Case>
	))

	console.log(myCaseValue)

	return (
		<>
			<div className={styles.container}>
				<div className={styles.bars}>{mappedBars}</div>
				<div className={styles.cases_section}>{cases}</div>
				{/* <MiddlePanel /> */}
				<div className={styles.commentary_section}>
					<img className={styles.man} src={man2_img} alt='' />
					<div className={styles.comment_space}>
						<p>Komentarz prowadzącego</p>
					</div>
					<button className={styles.help_button} onClick={() => setIsHelpOpened(true)}>
						zasady gry
					</button>
				</div>
			</div>
			{isHelpOpened && <GameRules setIsHelpOpened={setIsHelpOpened} />}
		</>
	)
}
