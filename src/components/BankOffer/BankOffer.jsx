import styles from './BankOffer.module.css'
import { AcceptedOffer } from '../AcceptedOffer/AcceptedOffer'
import { useState } from 'react'

export function BankOffer({ setIsBankOfferShown }) {
	const [isOfferAccepted, setIsOfferAccepted] = useState(false)

	return (
		<>
			<div className={` ${isOfferAccepted ? styles.container_hidden : styles.container}`}>
				<div className={styles.offer}>
					<h2>Bank oferuje...</h2>
					<p>27.500 zł</p>
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
			{isOfferAccepted && <AcceptedOffer />}
		</>
	)
}
