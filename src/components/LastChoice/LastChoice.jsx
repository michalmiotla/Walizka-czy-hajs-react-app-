import styles from './LastChoice.module.css'
import { HugeButton } from '../HugeButton/HugeButton'
import { Case } from '../Case/Case'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'
import questionMark from '../../assets/questionMark.png'

export function LastChoice() {
	return (
		<div className={styles.container}>
			<div>
				<p>Zostały dwie walizki... Którą wybierasz?</p>
			</div>
			<div>
				<Case value={12} />
				<img src={ArrowLeft} alt='' />
				<img src={ArrowRight} alt='' />
				<img src={questionMark} alt='' />
				<Case value={23} />
			</div>
			<div>
				<p>Wybrałeś walizkę, która była z Tobą od początku. Twoja wygrana to 200.000 zł!</p>
				<HugeButton>Zagraj ponownie</HugeButton>
			</div>
		</div>
	)
}
