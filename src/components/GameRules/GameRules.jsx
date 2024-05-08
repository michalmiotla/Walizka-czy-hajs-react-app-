import styles from './GameRules.module.css'
import { HugeButton } from '../HugeButton/HugeButton'

export function GameRules() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<p>
						Na początek gracz wybiera jedną z dwudziestu sześciu dostępnych walizek, które kryją w sobie różne kwoty -
						od jednego grosza, aż po milion złotych. Walizka ta będzie z graczem do końca gry.{' '}
					</p>
				</li>
				<li>
					<p>
						Po wybraniu swojej walizki gracz przystępuje do odsłaniania zawartości pozostałych, niewybranych walizek. W
						każdej rundzie gracz ma określoną (z każdą rundą coraz mniejszą) liczbę walizek do otwarcia. Tym sposobem
						eliminowane są kolejne stawki, które na pewno nie znajdują się w walizce wybranej przez gracza.{' '}
					</p>
				</li>
				<li>
					<p>
						Po każdej rundzie Bank przedstawia swoją ofertę wykupu walizki od gracza za kwotę określoną na podstawie
						wartości pozostałych w grze walizek. Gracz może przyjąć daną ofertę i zakończyć grę z przedstawioną kwotą
						jako końcowy wynik, lub grać dalej i otwierać kolejne walizki.
					</p>
				</li>
				<li>
					<p>
						W momencie gry zostaną trzy walizki w grze (wybrana na początku oraz dwie nieotwarte) gracz otrzymuje
						ostatnią ofertę od Banku. Jeśli ją odrzuci, zostaje z ostatnim wyborem - zostaje przy walizce wybranej na
						początku lub zamienia ją na tą jedyną nieotwartą. Po tym wyborze gra kończy się, a gracz wygrywa kwotę z
						walizki wybranej w ostatnim etapie gry.
					</p>
				</li>
			</ul>
			<HugeButton>Zamknij</HugeButton>
		</div>
	)
}
