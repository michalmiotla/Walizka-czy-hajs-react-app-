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
	isGameRestarted,
	setIsGameRestarted,
	setWaitToOpenCase,
	waitToOpenCase,
	setRemainingCasesValues,
}) {
	const [isCaseOpened, setIsCaseOpened] = useState(false)
	const [disabledButton, setDisabledButton] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setWaitToOpenCase(true)
		}, 2000)

		return () => {
			clearTimeout(timer)
		}
	}, [waitToOpenCase, setWaitToOpenCase])

	useEffect(
		function showBankOffer() {
			if (
				waitToOpenCase &&
				(openedCasesValues.length === 6 ||
					openedCasesValues.length === 11 ||
					openedCasesValues.length === 15 ||
					openedCasesValues.length === 18 ||
					openedCasesValues.length === 20 ||
					openedCasesValues.length === 21 ||
					openedCasesValues.length === 22 ||
					openedCasesValues.length === 23 ||
					openedCasesValues.length === 24)
			) {
				setIsBankOfferShown(true)
			}
		},
		[openedCasesValues, setIsBankOfferShown, waitToOpenCase]
	)

	useEffect(() => {
		if (isGameRestarted) {
			setIsCaseOpened(false)
			setDisabledButton(false)
			setIsGameRestarted(false)
		}
	}, [isGameRestarted, setIsGameRestarted])

	function selectMyCase() {
		setMyCaseNumber(number)
		setMyCaseValue(value)
		setDisabledButton(true)
	}

	function openRemainingCases() {
		if (waitToOpenCase) {
			setIsCaseOpened(true)
			setDisabledButton(true)
			setOpenedCasesValues(prevValue => [...prevValue, value])
			setRemainingCasesValues(prevValue => prevValue.filter(c => c !== value))
			setWaitToOpenCase(false)
		}
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
				className={`${styles.case_button} ${myCaseNumber === number ? styles.chosen_case : ''} ${
					waitToOpenCase ? '' : styles.wait_to_click
				}`}>
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
