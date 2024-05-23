export function lastChoiceComment(lastCaseValue, myCaseValue, isMyCaseChosen, isLastCaseChosen) {
	switch (true) {
		case isMyCaseChosen && myCaseValue > lastCaseValue:
			return 'Decyzja o pozostaniu przy pierwotnym wyborze okazała się słuszna, brawo!'
		case isMyCaseChosen && myCaseValue < lastCaseValue:
			return 'No cóż, dałem Ci możliwość zamiany, chciałem dobrze, można było skorzystać...'
		case isLastCaseChosen && myCaseValue > lastCaseValue:
			return 'W teleturniejach mówią że pierwsza myśl zawsze najlepsza... przypadek?'
		case isLastCaseChosen && myCaseValue < lastCaseValue:
			return 'To był ryzykowny manewr, ale wyszedł znakomicie, moje gratulacje!'
	}
}
