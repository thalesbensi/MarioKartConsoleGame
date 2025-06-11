const Character = require('./Character');

class Bowser extends Character{

    constructor() {
        super("Bowser", 5, 2, 5, 0);
    }
}

module.exports = Bowser;