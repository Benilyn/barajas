const STANDARD_VALUES = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');
const STANDARD_SUITS = 'spades hearts diamonds clubs'.split(' ');

function createDeck() {
	const deck = [];
	STANDARD_SUITS.forEach(function(suit) {
		STANDARD_VALUES.forEach(function(value) {
			const card = createCard(value, suit);
			deck.push(card);
		}); //STANDARD_VALUES.forEach
	}); //STANDARD_SUITS.forEach

		
	return deck; 
} //createDeck

function createCard(value, suit) {
	return {value: value, suit: suit};
} //createCard


module.exports = {createDeck, createCard};
