export function acceptedOfferComment(isOfferAccepted, wonValue, myCaseValue) {
	switch (true) {
		case isOfferAccepted && myCaseValue > wonValue:
			return 'Wybrałeś pewny hajs, rozumiem Twoją decyzję, ale jak widać można było jeszcze zaryzykować i zgarnąć nieco więcej...'
		case isOfferAccepted && myCaseValue < wonValue:
			return 'Wykazałeś się zdrowym rozsądkiem i słusznie, masz nosa do tej gry... gratulacje, hajs jest Twój!'
	}
}
