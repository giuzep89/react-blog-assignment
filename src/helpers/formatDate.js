
export function formatDate(date) {
    const dateToFormat = new Date(date);

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    return dateToFormat.toLocaleDateString("nl-NL", options);
}