import styles from './Case.module.css'
import { useEffect, useState } from 'react'

export function Case({
	number,
	value,
	setMyCaseValue,
	setMyCaseNumber,
	myCaseNumber,
	openedCasesValues,
	setOpenedCasesValues,
	setIsBankOfferShown,
}) {
	const [isCaseOpened, setIsCaseOpened] = useState(false)
	const [disabledButton, setDisabledButton] = useState(false)

	useEffect(
		function showBankOffer() {
			if (openedCasesValues.length === 6 || openedCasesValues.length === 11) {
				setIsBankOfferShown(true)
			}
		},
		[openedCasesValues, setIsBankOfferShown]
	)

	function selectMyCase() {
		setMyCaseNumber(number)
		setMyCaseValue(value)
		setDisabledButton(true)
	}

	function openRemainingCases() {
		setIsCaseOpened(true)
		setDisabledButton(true)
		setOpenedCasesValues(prevValue => [...prevValue, value])
	}

	function game() {
		if (myCaseNumber === null) {
			selectMyCase()
		} else {
			openRemainingCases()
		}
	}

	return (
		<div className={styles.case_container}>
			<button
				disabled={disabledButton}
				onClick={game}
				className={`${styles.case_button} ${myCaseNumber === number ? styles.chosen_case : ''}`}>
				{isCaseOpened ? (
					<div className={styles.opened_case_container}>
						<p className={styles.case_value}>{value}</p>
						<p>zł</p>
					</div>
				) : (
					<p className={styles.case_number}>{number}</p>
				)}
			</button>
		</div>
	)
}
