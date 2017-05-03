function createDeck() {
	return [];
} //createDeck

function createCard(suit) {
	return {value: 'A', suit: suit};
} //createCard


module.exports = {createDeck, createCard};
