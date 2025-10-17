export function calculateReadingTime(numberOfWords) {
    const readingTime = (numberOfWords * 0.3)/100;
    return Math.round(readingTime);
}



//// --- De readTime in minuten. De leestijd bereken je zelf op basis van het aantal ingevulde woorden:
// een gemiddelde gebruiker leest 100 woorden in 0.3 minuten.
// Zorg dat je decimalen altijd afrond naar hele getallen


// 100 : 0.3 = numberOfWords : x
// 100 : 0.3 = numberOfWords : x
// 100*x = 0.3*numberOfWords
// 100x = 75
// x = 75/100
// x = 0,75