export function avg(arr, name = 'rate') {
    if(!arr) return 0;
    const total = arr.reduce((sum, item) => sum + item[name], 0);
    return total / arr.length;
}