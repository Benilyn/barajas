function createDeck() {
	return [
		createCard('A', 'spades')
	]; //return createCard
} //createDeck

function createCard(value, suit) {
	return {value: value, suit: suit};
} //createCard


module.exports = {createDeck, createCard};
