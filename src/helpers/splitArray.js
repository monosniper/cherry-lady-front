export function splitArray(arr) {
    const midIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.splice(0, midIndex);
    return [firstHalf, arr];
}