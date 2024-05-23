import styles from './BankOffer.module.css'
import { AcceptedOffer } from '../AcceptedOffer/AcceptedOffer'

export function BankOffer({
	setIsBankOfferShown,
	resetGame,
	setIsOfferAccepted,
	isOfferAccepted,
	wonValue,
	myCaseValue,
}) {
	return (
		<>
			<div className={` ${isOfferAccepted ? styles.container_hidden : styles.container}`}>
				<div className={styles.offer}>
					<h2>Bank oferuje...</h2>
					<p>{wonValue} zł</p>
				</div>
				<div className={styles.buttons}>
					<button onClick={() => setIsBankOfferShown(false)} className='big_button'>
						Gram dalej!
					</button>
					<button onClick={() => setIsOfferAccepted(true)} className='big_button'>
						Biorę hajs!
					</button>
				</div>
			</div>
			{isOfferAccepted && (
				<AcceptedOffer
					setIsOfferAccepted={setIsOfferAccepted}
					setIsBankOfferShown={setIsBankOfferShown}
					resetGame={resetGame}
					wonValue={wonValue}
					myCaseValue={myCaseValue}
				/>
			)}
		</>
	)
}
