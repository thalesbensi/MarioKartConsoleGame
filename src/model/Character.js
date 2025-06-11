class Character {
    constructor(name, speed, maneuverability, power, points) {
        this._name = name;
        this._speed = speed;
        this._maneuverability = maneuverability;
        this._power = power;
        this._points = points;
    }

    get name() {
        return this._name;
    }

    get speed() {
        return this._speed;
    }

    get maneuverability() {
        return this._maneuverability;
    }

    get power() {
        return this._power;
    }

    get points() {
        return this._points;
    }
}

export default Character;
