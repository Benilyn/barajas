const chai = require('chai');
const should = chai.should();

const barajas = require('../src/index.js');

describe('Deck of Cards', function() {
	it('should get a deck of cards', function() {
		const deck = barajas.createDeck();
		deck.should.be.a('array');
		
	}); //it (should get a deck of cards)
}); //describe (Deck of Cards)

describe('Cards', function() {
	it('should get A of spade', function() {
		const card = barajas.createCard();
		card.should.be.a('object');
		card.should.include.keys('value', 'suit');
	}); //it (get A-spade)
}); //describe (cards)