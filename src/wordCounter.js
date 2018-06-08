function wordCounter(text, minLength) {
    if (typeof text === 'string' && typeof minLength === 'number') {
        const cleanText = text.replace(/'|,|-|;|:|\?|\./g, ' ').toLowerCase();

        const words = cleanText.split(' ');

        const wordOccurencies = {};

        words.map((word) => {
            if (word.length >= minLength) {
                if (wordOccurencies[word] >= 1) {
                    wordOccurencies[word]++;
                } else {
                    wordOccurencies[word] = 1;
                }
            }
        });

        return wordOccurencies;
    } else {
        return false;
    }
}

module.exports = wordCounter;
