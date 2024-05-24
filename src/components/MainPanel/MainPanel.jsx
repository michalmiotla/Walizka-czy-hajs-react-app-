import styles from './MainPanel.module.css'
import { barsAmountsArray, casesArray, sortAmounts, sortedAmounts } from '../../utils/arrays'
import { ValueBar } from '../ValueBar/ValueBar'
import { Case } from '../Case/Case'
import { BankOffer } from '../BankOffer/BankOffer'
import { GameRules } from '../GameRules/GameRules'
import man2_img from '../../assets/man2.png'
import { useState } from 'react'
import { midGameComment } from '../../utils/midGameComment'
import { LastChoice } from '../LastChoice/LastChoice'
import { lastChoiceComment } from '../../utils/lastChoiceComment'
import { acceptedOfferComment } from '../../utils/acceptedOfferComment'
import { bankOfferCalc } from '../../utils/bankOfferCalc'

export function MainPanel() {
	const [isHelpOpened, setIsHelpOpened] = useState(false)
	const [myCaseValue, setMyCaseValue] = useState(null)
	const [myCaseNumber, setMyCaseNumber] = useState(null)
	const [openedCasesValues, setOpenedCasesValues] = useState([])
	const [isBankOfferShown, setIsBankOfferShown] = useState(false)
	const [isGameRestarted, setIsGameRestarted] = useState(false)
	const [waitToOpenCase, setWaitToOpenCase] = useState(true)
	const [remainingCasesValues, setRemainingCasesValues] = useState(sortedAmounts)
	const [remainingCasesNumbers, setRemainingCasesNumbers] = useState(casesArray)
	const [isMyCaseChosen, setIsMyCaseChosen] = useState(false)
	const [isLastCaseChosen, setIsLastCaseChosen] = useState(false)
	const [isOfferAccepted, setIsOfferAccepted] = useState(false)

	const lastCaseValue = remainingCasesValues.filter(value => value !== myCaseValue)
	const lastCaseNumber = remainingCasesNumbers.filter(number => number !== myCaseNumber)
	const wonValue = bankOfferCalc(remainingCasesValues)

	const midComment = midGameComment(
		remainingCasesValues,
		myCaseNumber,
		waitToOpenCase,
		isBankOfferShown,
		lastCaseNumber,
		isMyCaseChosen,
		isLastCaseChosen
	)

	const lastComment = lastChoiceComment(lastCaseValue, myCaseValue, isMyCaseChosen, isLastCaseChosen)

	const acceptedComment = acceptedOfferComment(isOfferAccepted, wonValue, myCaseValue)

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
			setIsBankOfferShown={setIsBankOfferShown}
			isGameRestarted={isGameRestarted}
			setIsGameRestarted={setIsGameRestarted}
			waitToOpenCase={waitToOpenCase}
			setWaitToOpenCase={setWaitToOpenCase}
			setRemainingCasesValues={setRemainingCasesValues}
			setRemainingCasesNumbers={setRemainingCasesNumbers}></Case>
	))

	function resetGame() {
		sortAmounts()
		setMyCaseValue(null)
		setMyCaseNumber(null)
		setOpenedCasesValues([])
		setRemainingCasesValues(sortedAmounts)
		setRemainingCasesNumbers(casesArray)
		setIsGameRestarted(true)
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.bars}>{mappedBars}</div>
				<div className={styles.cases_section}>{cases}</div>
				{isBankOfferShown && (
					<BankOffer
						remainingCasesValues={remainingCasesValues}
						setIsBankOfferShown={setIsBankOfferShown}
						resetGame={resetGame}
						setIsOfferAccepted={setIsOfferAccepted}
						isOfferAccepted={isOfferAccepted}
						wonValue={wonValue}
						myCaseValue={myCaseValue}
					/>
				)}
				{remainingCasesValues.length === 2 && !isBankOfferShown && waitToOpenCase && (
					<LastChoice
						myCaseNumber={myCaseNumber}
						myCaseValue={myCaseValue}
						resetGame={resetGame}
						lastCaseValue={lastCaseValue}
						lastCaseNumber={lastCaseNumber}
						setIsMyCaseChosen={setIsMyCaseChosen}
						isMyCaseChosen={isMyCaseChosen}
						setIsLastCaseChosen={setIsLastCaseChosen}
						isLastCaseChosen={isLastCaseChosen}
					/>
				)}
				<div className={styles.commentary_section}>
					<img className={styles.man} src={man2_img} alt='' />
					<div className={styles.comment_space}>
						<p>{isOfferAccepted ? acceptedComment : midComment}</p>
						<p>{(isMyCaseChosen || isLastCaseChosen) && lastComment}</p>
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
