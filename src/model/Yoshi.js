const Character = require('./Character');

class Yoshi extends Character{

    constructor() {
        super("Yoshi", 2, 4, 3, 0);
    }
}

module.exports = Yoshi;