export function switchComment(remainingValues, myCaseNumber, waitToOpenCase, isBankOfferShown) {
	switch (true) {
		case remainingValues.length === 26:
			return myCaseNumber
				? `Wybrałeś walizkę nr. ${myCaseNumber}! Możemy zatem rozpocząć pierwszą rundę, w której do otwarcia masz sześć walizek. Powodzenia...  `
				: 'Wybierz swoją walizkę!'
		case remainingValues.length === 25:
			return 'Do otwarcia jeszcze pięć walizek...'
		case remainingValues.length === 24:
			return 'Do otwarcia jeszcze cztery walizki...'
		case remainingValues.length === 23:
			return 'Połowa rundy za Tobą, jeszcze trzy walizki...'
		case remainingValues.length === 22:
			return 'Do otwarcia jeszcze dwie walizki...'
		case remainingValues.length === 21:
			return 'Przed Tobą ostatni wybór w tej rundzie...'
		case remainingValues.length === 20:
			return !waitToOpenCase
				? 'Poczekajmy na ofertę Banku...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: 'A więc gramy dalej! W drugiej rundzie musisz odsłonić pięć kolejnych wartości...'
		case remainingValues.length === 19:
			return 'Do otwarcia jeszcze cztery walizki...'
		case remainingValues.length === 18:
			return 'Do otwarcia jeszcze trzy walizki...'
		case remainingValues.length === 17:
			return 'Do otwarcia jeszcze dwie walizki...'
		case remainingValues.length === 16:
			return 'Dobrnęliśmy prawie do końca rundy, została ostatnia walizka...'
		case remainingValues.length === 15:
			return !waitToOpenCase
				? 'Sprawdźmy co Bank ma do powiedzenia...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: 'Odważnie! Pora zatem na trzecią rundę, walizek coraz mniej, wybory coraz trudniejsze... Cztery wartości muszą zniknąć z planszy. Powodzenia!'
		case remainingValues.length === 14:
			return 'Do otwarcia jeszcze trzy walizki...'
		case remainingValues.length === 13:
			return 'Do otwarcia jeszcze dwie walizki...'
		case remainingValues.length === 12:
			return 'Po kolejnym wyborze kończymy rundę trzecią...'
		case remainingValues.length === 11:
			return !waitToOpenCase
				? 'Czas poznać kolejną ofertę ze strony Banku...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: 'Robi się gorąco! Wkraczamy w decydujące fazy gry, do otwarcia tym razem trzy walizki. Do dzieła!'
		case remainingValues.length === 10:
			return 'Do otwarcia jeszcze dwie walizki...'
		case remainingValues.length === 9:
			return 'Sprawdźmy zawartość ostatniej walizki w tej rundzie...'
		case remainingValues.length === 8:
			return !waitToOpenCase
				? 'Co tym razem zaproponuje nam Bank?'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: 'I to mi się podoba! Runda piąta to tylko dwie walizki do otwarcia przed kolejną ofertą Banku, wybierz mądrze...'
		case remainingValues.length === 7:
			return 'I jeszcze jedna walizka do otwarcia...'
		case remainingValues.length === 6:
			return !waitToOpenCase
				? 'Pora poznać kolejną ofertę odkupu walizki...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: 'Grubo! Od teraz, po każdym odsłonięciu wartości Bank wyśle nam nową propozycję odkupu, zatem każdy kolejny strzał musi lecieć w środek tarczy!'
		case remainingValues.length === 5:
			return !waitToOpenCase
				? 'Sprawdźmy nową ofertę...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: `Emocje sięgają zenitu! Teraz byle nie trafić w najwyższą dostępną kwotę...`
		case remainingValues.length === 4:
			return !waitToOpenCase
				? 'Czy Bank zaproponuje nam coś ciekawego...?'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: `Jak Ty wytrzymujesz tę presję? Jestem pod wrażeniem... Wybierz proszę kolejną walizkę...`
		case remainingValues.length === 3:
			return !waitToOpenCase
				? 'Halo? Bank? Czekamy na ofertę...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: `Dotarliśmy już bardzo daleko... Po tej rundzie otrzymasz ostatnią propozycję z Banku. Jeśli ją odrzucisz, Twoją wygraną będzie zawartość jednej z pozostałych walizek... `
		case remainingValues.length === 2:
			return !waitToOpenCase
				? 'Oto ostatnia propozycja wykupu Twojej walizki przez Bank...'
				: isBankOfferShown
				? 'Walizka, czy hajs?'
				: `Wóz albo przewóz. Radość lub smutek. Zostajesz przy swojej pierwotnej decyzji i walizce nr. ${myCaseNumber}, czy dokonujesz zmiany i kończysz grę z walizką nr. ..?`

		default:
			break
	}
}
