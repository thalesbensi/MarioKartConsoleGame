const Character = require('./Character');

class Luigi extends Character{

    constructor() {
        super("Luigi", 3, 4, 4, 0);
    }
}

module.exports = Luigi;