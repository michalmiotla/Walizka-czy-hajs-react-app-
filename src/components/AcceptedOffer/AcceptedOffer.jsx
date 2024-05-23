import styles from './AcceptedOffer.module.css'

export function AcceptedOffer({ setIsOfferAccepted, setIsBankOfferShown, resetGame, wonValue, myCaseValue }) {
	return (
		<div className={styles.container}>
			<div className={styles.offer}>
				<h2>Twoja wygrana to...</h2>
				<p>{wonValue} zł</p>
			</div>
			<div className={styles.game_summary}>
				<p>W wybranej przez Ciebie na starcie rozgrywki walizce znajdowała się kwota w wysokości {myCaseValue} zł.</p>
				<button
					onClick={() => {
						resetGame()
						setIsOfferAccepted(false)
						setIsBankOfferShown(false)
					}}
					className='big_button'>
					Zagraj ponownie!
				</button>
			</div>
		</div>
	)
}
