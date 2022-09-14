export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount - (hours * 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}