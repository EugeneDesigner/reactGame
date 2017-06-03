'use strict';

import React from 'react';
import styles from '../styles.css';
import PropTypes from 'prop-types';

const Guess = ({guessNumber, guessPosition}) => {
    const guessColor = guessPosition === 'equal' ? 'green' : 'red';

    return (
        <div className={styles[guessColor]}>
            <div>{guessNumber} - {guessPosition === 'equal' ? 'was correct' : 'a little bit ' + guessPosition}</div>
        </div>
    );
};

Guess.propTypes = {
    guessNumber: PropTypes.number.isRequired,
    guessPosition: PropTypes.string.isRequired
};

export default Guess;
