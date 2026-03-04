export function calculateReadingTime(numberOfWords) {
    const readingTime = (numberOfWords * 0.3)/100;
    return Math.round(readingTime);
}