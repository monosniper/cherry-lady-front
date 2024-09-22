export function findValueForRange(data, value) {
	const keys = Object.keys(data).map(Number).sort((a, b) => a - b);
	
	for (let i = 0; i < keys.length; i++) {
		if (keys[i] > value) {
			return data[keys[i - 1]];
		}
	}

	return Object.values(data)[Object.entries(data).length - 1];
}