export function avg(arr, name = 'rate') {
    const total = arr.reduce((sum, item) => sum + item[name], 0);
    return total / arr.length;
}