export function calculateMinMax(data) {
    const result = {
	exit: {},
	apartments: {}
    };
    
    data.forEach(item => {
	const categories = item.pricing;
	
	for (const category in categories) {
	    const pricing = categories[category];
	    
	    for (const property in pricing) {
		const value = Number(pricing[property]); // Преобразуем строку в число
		if (!result[category][property]) {
		    result[category][property] = { min: value, max: value };
		} else {
		    result[category][property].min = Math.min(result[category][property].min, value);
		    result[category][property].max = Math.max(result[category][property].max, value);
		}
	    }
	}
    });
    
    return result;
}
