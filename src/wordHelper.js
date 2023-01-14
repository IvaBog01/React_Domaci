

export const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export const isSentenceMatched = (sentence, letters) => {
    const sentenceLetters = sentence.split('');
    for (let letter of sentenceLetters) {
        if (!letters.includes(letter.toLocaleLowerCase()) &&
            alphabet.includes(letter.toLocaleLowerCase())
        ) {
            return false;
        }
    }
    return true;
}