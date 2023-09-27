const Dinosaur = require("./dinosaur")

class Park{
constructor(name, ticketPrice){

    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinosaurs = []

    }

    
    addDinosaur(dinosaur) {

        return this.collectionOfDinosaurs.push(dinosaur)

    }

    removeDinosaur(dinosaur) {
        const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur)
        if (indexOfDinosaur === -1) {
            return
        }
        this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
    }

    sumOfVisitorsPerDay() {
        let sum = 0

        for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
            sum += this.collectionOfDinosaurs[i].guestsAttractedPerDay
        }
        return sum
    }

    sumOfVisitorsPerYear() {

        const sum = this.sumOfVisitorsPerDay() * 365
        return sum

    }

    totalRevenueRorOneYear() {

        const sum = this.sumOfVisitorsPerYear() * this.ticketPrice
        return sum

    }
}

module.exports = Park
