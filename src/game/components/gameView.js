'use strict';

import React, {Component} from 'react';
import History from './gameHistory';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            guesses: [],
            inputNumber: ''
        };

        this.onNumberGuess = this.onNumberGuess.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onNumberGuess(number) {
        const position = this.props.game.guessNumber(number);
        const guess = {number, position};
        this.setState({
            guesses: [...this.state.guesses, guess]
        });
    }

    onChange(e) {
        this.setState({inputNumber: e.target.value});
    }

    onEnter(e) {
        if (e.keyCode === 13) {
            const number = parseInt(this.state.inputNumber);
            if (!isNaN(number)) {
                this.onNumberGuess(number);
                this.setState({value: ''});
            }
        }
    }

    renderGame() {
        return this.props.game.gameStatus === 'equal'
            ? <div className={styles.block}>
                <h3> You won! Only needed {this.state.guesses.length} guesses for that</h3>
            </div>
            : <div>
                <h3> Guess from {this.props.game.gameScale[0]} to {this.props.game.gameScale[1]} - sounds easy?</h3>
                <input
                    onKeyUp={this.onEnter}
                    value={this.state.inputNumber}
                    onChange={this.onChange}
                    className={styles.inputField}
                />
            </div>;
    }

    render() {
        return (
            <div className={styles.game}>
                <h3> {this.props.game.getName()} </h3>
                {this.renderGame()}
                <History guesses={this.state.guesses} />
            </div>
        );
    }
}

Game.propTypes = {
    game: PropTypes.shape({
        guessNumber: PropTypes.func.isRequired,
        gameStatus: PropTypes.string.isRequired,
        gameScale: PropTypes.array.isRequired,
        getName: PropTypes.func.isRequired
    })
};
