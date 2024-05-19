export function bankOfferCalc(remainingValues) {
	switch (true) {
		case remainingValues.length === 20:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 3)
		case remainingValues.length === 15:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 2.7)
		case remainingValues.length === 11:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 2.5)
		case remainingValues.length === 8:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 2.3)
		case remainingValues.length === 6:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 2)
		case remainingValues.length === 5:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 1.7)
		case remainingValues.length === 4:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 1.4)
		case remainingValues.length === 3:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length / 1.2)
		case remainingValues.length === 2:
			return Math.round(remainingValues.reduce((a, b) => a + b, 0) / remainingValues.length)
	}
}
