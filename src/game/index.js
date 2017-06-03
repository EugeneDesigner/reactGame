'use strict';

import React from 'react';
import styles from './game.css';
import GameComponent from './components/gameView';
import GuessGame from './gamesList/guessGame';

const guessGame = new GuessGame();

const Game = () => {
    return (
        <div className={styles.game}>
            <h1>Hi there, are you ready to looooooooose</h1>
            <GameComponent game={guessGame}/>
        </div>
    );
};

export default Game;
