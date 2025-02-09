export const convertSeconds = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const rs = `${formattedMinutes}:${formattedSeconds}`
    return rs
}