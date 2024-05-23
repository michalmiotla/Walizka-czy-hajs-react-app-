import styles from './LastChoice.module.css'
import case_img from '../../assets/case_img.png'
import my_case from '../../assets/my-case.png'
import { useState } from 'react'

export function LastChoice({
	myCaseNumber,
	myCaseValue,
	resetGame,
	lastCaseValue,
	lastCaseNumber,
	setIsMyCaseChosen,
	isMyCaseChosen,
	setIsLastCaseChosen,
	isLastCaseChosen,
}) {
	const [disabledButton, setDisabledButton] = useState(false)

	function chooseMyCase() {
		setIsMyCaseChosen(true)
		setDisabledButton(true)
	}

	function chooseLastCase() {
		setIsLastCaseChosen(true)
		setDisabledButton(true)
	}

	function playAgain() {
		resetGame()
		setIsLastCaseChosen(false)
		setIsMyCaseChosen(false)
		setDisabledButton(false)
	}

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>Zostały dwie walizki... Którą wybierasz?</p>
			</div>
			<div className={styles.choice}>
				<div className={styles.choice_case}>
					<div className={styles.case_container}>
						<img className={styles.case_img} src={my_case} alt='' />
						<button disabled={disabledButton} onClick={chooseMyCase} className={styles.case_button}>
							{isMyCaseChosen || isLastCaseChosen ? (
								<p className={styles.case_value}>
									{myCaseValue}
									<span>zł</span>
								</p>
							) : (
								<p className={styles.case_number}>{myCaseNumber}</p>
							)}
						</button>
					</div>
				</div>
				<div className={styles.choice_case}>
					<div className={styles.case_container}>
						<img className={styles.case_img} src={case_img} alt='' />
						<button disabled={disabledButton} onClick={chooseLastCase} className={styles.case_button}>
							{isMyCaseChosen || isLastCaseChosen ? (
								<p className={styles.case_value}>
									{lastCaseValue}
									<span>zł</span>
								</p>
							) : (
								<p className={styles.case_number}>{lastCaseNumber}</p>
							)}
						</button>
					</div>
				</div>
			</div>
			<div className={styles.summary}>
				{isMyCaseChosen && (
					<>
						<p>Wybrałeś walizkę, która była z Tobą od początku gry. Twoja wygrana to {myCaseValue} zł!</p>
						<button onClick={playAgain} className='big_button'>
							Zagraj ponownie
						</button>
					</>
				)}
				{isLastCaseChosen && (
					<>
						<p>Wybrałeś walizkę, która nie była Twoim pierwszym wyborem. Twoja wygrana to {lastCaseValue} zł!</p>
						<button onClick={playAgain} className='big_button'>
							Zagraj ponownie
						</button>
					</>
				)}
			</div>
		</div>
	)
}
