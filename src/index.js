function createDeck() {
	return [];
} //createDeck

function createCard(value, suit) {
	return {value: value, suit: suit};
} //createCard


module.exports = {createDeck, createCard};
