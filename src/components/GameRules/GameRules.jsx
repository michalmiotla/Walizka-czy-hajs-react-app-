import styles from './GameRules.module.css'

export function GameRules({ setIsHelpOpened }) {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<p className={styles.paragraph}>
						Celem gry jest osiągnięcie możliwie najwyższej wygranej pieniężnej, poprzez podejmowanie odpowiednich
						decyzji w trakcie rozgrywki. Pieniądze można wygrać dzięki przyjęciu jednej z ofert Banku, lub zostając z
						jedną walizką i jej zawartością na koniec gry.
					</p>
				</li>
				<li>
					<p className={styles.paragraph}>
						Na start gracz wybiera jedną z dwudziestu sześciu dostępnych walizek, które kryją w sobie różne kwoty - od
						jednego grosza, aż po milion złotych. Walizka ta będzie z graczem do końca gry, jeśli nie przyjmie wcześniej oferty z Banku.
					</p>
				</li>
				<li>
					<p className={styles.paragraph}>
						Po wybraniu swojej walizki gracz przystępuje do odsłaniania zawartości pozostałych walizek. W każdej rundzie
						gracz ma określoną (z każdą rundą coraz mniejszą) liczbę walizek do otwarcia. Tym sposobem eliminowane są
						kolejne wartości, które na pewno nie znajdują się w walizce wybranej przez gracza, zatem im mniejsza odkryta
						wartość, tym lepiej.
					</p>
				</li>
				<li>
					<p className={styles.paragraph}>
						Po każdej rundzie Bank przedstawia swoją ofertę wykupu walizki od gracza za kwotę określoną na podstawie
						wartości pozostałych w grze walizek. Gracz może przyjąć daną ofertę i zakończyć grę z przedstawioną kwotą
						jako końcowy wynik, lub grać dalej i otwierać kolejne walizki.
					</p>
				</li>
				<li>
					<p className={styles.paragraph}>
						W momencie, gdy zostaną trzy walizki w grze (wybrana na początku oraz dwie nieotwarte) gracz otrzymuje
						ostatnią ofertę od Banku. Jeśli ją odrzuci, musi podjąć decyzję - zostaje przy walizce wybranej na początku
						gry, lub zamienia ją na jedyną dotychczas nieotwartą. Po tym wyborze gra kończy się, a gracz wygrywa kwotę z
						walizki wybranej w ostatnim etapie gry.
					</p>
				</li>
			</ul>
			<button className='big_button' onClick={() => setIsHelpOpened(false)}>
				Zamknij
			</button>
		</div>
	)
}
