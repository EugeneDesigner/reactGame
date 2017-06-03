'use strict';

import React from 'react';
import GuessItem from './listItem';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const History = ({guesses}) => {
    const guessHistory = guesses.map((guess, index) =>
        <GuessItem
            key={index}
            guessNumber={guess.number}
            guessPosition={guess.position}
        />
    );

    const renderHistory = () => {
        if (guessHistory.length) {
            return (
                <div className={styles.block}>
                    <h5>Here are your moves, my friend:</h5>
                    <div className={styles.historyList}>
                        {guessHistory}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    return renderHistory();
};


History.propTypes = {
    guesses: PropTypes.array.isRequired
};

export default History;
