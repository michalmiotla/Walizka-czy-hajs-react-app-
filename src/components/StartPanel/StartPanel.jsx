import styles from './StartPanel.module.css'
import MAN1 from '../../assets/man1.png'
import { HugeButton } from '../HugeButton/HugeButton'

export function StartPanel() {
	return (
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
					<HugeButton>zaczynamy!</HugeButton>
					<HugeButton>zasady gry</HugeButton>
				</div>
			</div>
		</div>
	)
}
