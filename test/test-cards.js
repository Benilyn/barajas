const chai = require('chai');
const should = chai.should();

const barajas = require('../src/index.js');

describe('Deck of Cards', function() {
	it('should get a deck of cards', function() {
		const deck = barajas.createDeck();
		deck.should.be.a('array');	
	}); //it (should get a deck of cards)

	it('should have A of spades', function() {
		const deck = barajas.createDeck();
		const card = barajas.createCard('A', 'spades');
		deck.should.include(card);
	}); //it (should have A of spades)
}); //describe (Deck of Cards)

describe('Cards', function() {
	it('should get A of spades', function() {
		const card = barajas.createCard('A', 'spades');
		card.should.be.a('object');
		card.should.include.keys('value', 'suit');
		card.suit.should.equal('spades');
		card.value.should.equal('A');
	}); //it (get A-spades)

	it('should get A of hearts', function() {
		const card = barajas.createCard('A', 'hearts');
		card.should.be.a('object');
		card.should.include.keys('value', 'suit');
		card.suit.should.equal('hearts');
		card.value.should.equal('A');
	}); //it (get A-hearts)

	it('should get K of diamonds', function() {
		const card = barajas.createCard('K', 'diamonds');
		card.should.be.a('object');
		card.should.include.keys('value', 'suit');
		card.suit.should.equal('diamonds');
		card.value.should.equal('K');
	}); //it (get K-diamonds)
}); //describe (cards)