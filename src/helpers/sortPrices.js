export function sortPrices(dataArray, exit, ascending = true) {
    return dataArray.sort((a, b) => {
	const keys = Object.keys(a.pricing[exit ? 'exit' : 'apartments']);
	
	for (let key of keys) {
	    const priceA = parseFloat(a.pricing[exit ? 'exit' : 'apartments'][key]);
	    const priceB = parseFloat(b.pricing[exit ? 'exit' : 'apartments'][key]);
	    
	    // Сравниваем цены
	    if (priceA !== priceB) {
		return ascending ? priceA - priceB : priceB - priceA;
	    }
	}
	
	return 0; // Если все цены равны
    });
}