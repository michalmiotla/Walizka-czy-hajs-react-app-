import styles from './MainPanel.module.css'
import { barsAmountsArray, casesArray, sortedAmounts } from '../../utils/arrays'
import { ValueBar } from '../ValueBar/ValueBar'
import { Case } from '../Case/Case'
import { BankOffer } from '../BankOffer/BankOffer'
import { GameRules } from '../GameRules/GameRules'
import man2_img from '../../assets/man2.png'
import { useState } from 'react'

export function MainPanel() {
	const [isHelpOpened, setIsHelpOpened] = useState(false)
	const [myCaseValue, setMyCaseValue] = useState(null)
	const [myCaseNumber, setMyCaseNumber] = useState(null)
	const [openedCasesValues, setOpenedCasesValues] = useState([])
	const [isBankOfferShown, setIsBankOfferShown] = useState(false)

	const mappedBars = barsAmountsArray.map(amount => (
		<ValueBar key={amount} value={amount} openedCasesValues={openedCasesValues}></ValueBar>
	))

	const cases = casesArray.map((el, index) => (
		<Case
			key={index}
			number={el}
			value={sortedAmounts[index]}
			setMyCaseValue={setMyCaseValue}
			setMyCaseNumber={setMyCaseNumber}
			myCaseNumber={myCaseNumber}
			openedCasesValues={openedCasesValues}
			setOpenedCasesValues={setOpenedCasesValues}
			setIsBankOfferShown={setIsBankOfferShown}></Case>
	))

	return (
		<>
			<div className={styles.container}>
				<div className={styles.bars}>{mappedBars}</div>
				<div className={styles.cases_section}>{cases}</div>
				{isBankOfferShown && <BankOffer setIsBankOfferShown={setIsBankOfferShown} />}
				<div className={styles.commentary_section}>
					<img className={styles.man} src={man2_img} alt='' />
					<div className={styles.comment_space}>
						<p>
							Wybrałeś walizkę nr. {myCaseNumber} {myCaseValue}
						</p>
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
