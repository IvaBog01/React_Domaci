import React, { useState } from 'react'
import { isSentenceMatched } from '../wordHelper';
import Word from './Word'

export default function Game({ sentence, onOver }) {
    const [usedLetters, setUsedLetters] = useState([]);
    const [triesLeft, setTriesLeft] = useState(5);

    const won = isSentenceMatched(sentence, usedLetters);

    return (
        <div className='flexRow mt-5'>
            {
                sentence.split(' ').map(word => {
                    return (
                        <Word word={word} usedLetters={usedLetters} />
                    )
                })
            }
        </div>
    )
}
