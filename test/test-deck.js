const chai = require('chai');
const should = chai.should();

const barajas = require('../src/index.js');

describe('Deck of Cards', function() {
	it('should get a deck of cards', function() {
		const deck = barajas.createDeck();
		console.log(deck);
		deck.length.should.equal(13);
		deck.should.be.a('array');	
	}); //it (should get a deck of cards)

	it('should have A of spades', function() {
		const deck = barajas.createDeck();
		const card = barajas.createCard('A', 'spades');
		deck.should.include(card);
	}); //it (should have A of spades)

	it('should have K of spades', function() {
		const deck = barajas.createDeck();
		const card = barajas.createCard('K', 'spades');
		deck.should.include(card);
	}); //it (should have K of spades)

	it('should have A of hearts', function() {
		const deck = barajas.createDeck();
		const card = barajas.createCard('A', 'hearts');
		deck.should.include(card);
	}); //it (should have A of hearts)
}); //describe (Deck of Cards)

