let restaurant = {
    name: 'Wafaa Kitchen',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailibility: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        return this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}

// input customer restoran
restaurant.seatParty(72);
// check dulu
console.log(restaurant.checkAvailibility(4));

// customer pergi
restaurant.removeParty(5);
// cek lagi
console.log(restaurant.checkAvailibility(4));

