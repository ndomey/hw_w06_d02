const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 5)
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Barosaurus', 'herbivorous', 45);
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual('Jurassic Park', actual)
  })

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(5, actual)
  })

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual([], actual)
  })

  xit('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1.species)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(['T-Rex'], actual)
  })

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('T-Rex')
    park.removeDinosaur('T-Rex')
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual([], actual)
  })

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.collectionOfDinosaurs.sort(function(a, b){return b.guestsAttractedPerDay - a.guestsAttractedPerDay})
    const actual = park.collectionOfDinosaurs[0]
    assert.deepStrictEqual(dinosaur1, actual)
  })

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)  
  })

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.sumOfVisitorsPerDay()
    assert.strictEqual(95, actual)
  })

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.sumOfVisitorsPerYear()
    assert.strictEqual(34675, actual)
  })

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.totalRevenueRorOneYear()
    assert.strictEqual(173375, actual)

  });

});
