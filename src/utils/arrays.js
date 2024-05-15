export const barsAmountsArray = [
	0.01, 0.2, 0.5, 1, 5, 10, 50, 100, 200, 300, 400, 500, 750, 1000, 5000, 7500, 10000, 20000, 30000, 50000, 100000,
	200000, 300000, 400000, 500000, 1000000,
]

const initialAmountsArray = [
	0.01, 0.2, 0.5, 1, 5, 10, 50, 100, 200, 300, 400, 500, 750, 1000, 5000, 7500, 10000, 20000, 30000, 50000, 100000,
	200000, 300000, 400000, 500000, 1000000,
]

export const casesArray = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
]

export function sortAmounts() {
	const sortedAmounts = initialAmountsArray.sort(() => Math.random() - 0.5)
	return sortedAmounts
}

export const sortedAmounts = sortAmounts()
