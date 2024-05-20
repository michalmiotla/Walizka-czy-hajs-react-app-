import styles from './LastChoice.module.css'
import case_img from '../../assets/case_img.png'
import my_case from '../../assets/my-case.png'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'
import questionMark from '../../assets/questionMark.png'
import { useState } from 'react'

export function LastChoice({ myCaseNumber, myCaseValue, remainingCasesValues, remainingCasesNumbers, resetGame }) {
	const [isCaseChosen, setIsCaseChosen] = useState(false)

	const otherCaseValue = parseInt(remainingCasesValues.filter(value => value !== myCaseValue))
	const otherCaseNumber = parseInt(remainingCasesNumbers.filter(number => number !== myCaseNumber))

	console.log(myCaseNumber)
	console.log(myCaseValue)
	console.log('---')
	console.log(otherCaseNumber)
	console.log(otherCaseValue)

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>Zostały dwie walizki... Którą wybierasz?</p>
			</div>
			<div className={styles.choice}>
				<div className={styles.choice_case}>
					<div className={styles.case_container}>
						<img className={styles.case_img} src={my_case} alt='' />
						<button onClick={() => setIsCaseChosen(true)} className={styles.case_button}>
							<p className={styles.case_number}>{myCaseNumber}</p>
						</button>
					</div>
				</div>
				<div className={styles.choice_signs}>
					<img className={styles.arrow} src={ArrowLeft} alt='' />
					<img className={styles.question_mark} src={questionMark} alt='' />
					<img className={styles.arrow} src={ArrowRight} alt='' />
				</div>
				<div className={styles.choice_case}>
					<div className={styles.case_container}>
						<img className={styles.case_img} src={case_img} alt='' />
						<button onClick={() => setIsCaseChosen(true)} className={styles.case_button}>
							<p className={styles.case_number}>{otherCaseNumber}</p>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.summary}>
				{isCaseChosen && (
					<>
						<p>Wybrałeś walizkę, która była z Tobą od początku. Twoja wygrana to {myCaseValue} zł!</p>
						<button onClick={resetGame} className='big_button'>
							Zagraj ponownie
						</button>
					</>
				)}
			</div>
		</div>
	)
}
