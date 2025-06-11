const Character = require('./Character');

class Mario extends Character{

    constructor() {
        super("Mario", 4, 3, 3, 0);
    }
}

module.exports = Mario;