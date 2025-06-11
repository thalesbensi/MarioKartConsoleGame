const Character = require('./Character');

class DonkeyKong extends Character{

    constructor() {
        super("Donkey Kong", 2, 4, 5, 0);
    }
}

module.exports = DonkeyKong;