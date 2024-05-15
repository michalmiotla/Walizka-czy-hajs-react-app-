import styles from './LastChoice.module.css'
import case_img from '../../assets/case_img.png'
import my_case from '../../assets/my-case.png'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'
import questionMark from '../../assets/questionMark.png'

export function LastChoice() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>Zostały dwie walizki... Którą wybierasz?</p>
			</div>
			<div className={styles.choice}>
				<div className={styles.choice_case}>
					<div className={styles.case_container}>
						<img className={styles.case_img} src={my_case} alt='' />
						<button className={styles.case_button}>
							<p className={styles.case_number}>17</p>
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
						<button className={styles.case_button}>
							<p className={styles.case_number}>9</p>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.summary}>
				<p>Wybrałeś walizkę, która była z Tobą od początku. Twoja wygrana to 200.000 zł!</p>
				<button className='big_button'>Zagraj ponownie</button>
			</div>
		</div>
	)
}
