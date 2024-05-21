export function formatDate(inputDate) {
    const [datePart, timePart] = inputDate.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, min] = timePart.split(':').map(Number);

    return {
        day: day,
        month: month,
        year: year,
        hour: hour,
        min: min
    };
}
