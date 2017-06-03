'use strict';

export default class GuessGame {
    constructor() {
        this.scale = [0, 9];
        this.status = '';
        this.name = 'Guessing game';
        this.targetNumber = Math.floor(Math.random() * (this.scale[1] - this.scale[0] + 1)) + this.scale[0];
    }

    get gameScale() {
        return this.scale;
    }

    getName() {
        return this.name;
    }

    get gameStatus() {
        return this.status;
    }

    guessNumber(number) {
        this.status = number === this.targetNumber
            ? 'equal'
            : number < this.targetNumber ? 'lower' : 'higher';
        return this.status;
    }
}
