import styles from './StartPanel.module.css'
import MAN1 from '../../assets/man1.png'
import { GameRules } from '../GameRules/GameRules'
import { useState } from 'react'

export function StartPanel({ setIsStartPanelShown }) {
	const [isHelpOpened, setIsHelpOpened] = useState(false)

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>walizka czy hajs?</h1>
				<div className={styles.content}>
					<img className={styles.manImg} src={MAN1} alt='' />
					<div className={styles.welcome}>
						<p>
							WITAJ W TELETURNIEJU “WALIZKA CZY HAJS”! NAZYWAM SIĘ ZYGFRYD HAJZEL I BĘDĘ MIAŁ OGROMNĄ PRZYJEMNOŚĆ
							POPROWADZIĆ DZISIEJSZE SHOW! JESTEŚ O KROK OD WIELKIEJ WYGRANEJ... PODEJMUJ WŁAŚCIWE DECYZJE, A WRÓCISZ DO
							DOMU Z WALIZKĄ WYPEŁNIONĄ PO BRZEGI HAJSEM, LUB PACHNĄCYMI NOWOŚCIĄ PLIKAMI PIENIĘDZY PROSTO Z BANKU...
							POWODZENIA!
						</p>
						<button className='big_button' onClick={() => setIsStartPanelShown(false)}>
							zaczynamy!
						</button>
						<button className='big_button' onClick={() => setIsHelpOpened(true)}>
							zasady gry
						</button>
					</div>
				</div>
			</div>
			{isHelpOpened && <GameRules setIsHelpOpened={setIsHelpOpened} />}
		</>
	)
}
