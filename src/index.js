const STANDARD_VALUES = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');

function createDeck() {
	const deck = [];
	STANDARD_VALUES.forEach(function(value) {
		const card = createCard(value, 'spades');
		deck.push(card);
	}); //STANDARD_VALUES.forEach
	return deck; 
} //createDeck

function createCard(value, suit) {
	return {value: value, suit: suit};
} //createCard


module.exports = {createDeck, createCard};
