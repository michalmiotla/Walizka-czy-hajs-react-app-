import styles from './Case.module.css'
import case_img from '../../assets/case_img.png'
import { useState } from 'react'

export function Case({ number, value, setMyCaseValue, setMyCaseNumber, myCaseNumber }) {
	const [isCaseOpened, setIsCaseOpened] = useState(false)
	const [disabledButton, setDisabledButton] = useState(false)

	function selectMyCase() {
		setMyCaseNumber(number)
		setMyCaseValue(value)
		setDisabledButton(true)
	}

	function openRemainingCases() {
		setIsCaseOpened(true)
		setDisabledButton(true)
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
			<img className={styles.case_img} src={case_img} alt='' />
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
