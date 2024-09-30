export function sortPrices(pricing, ascending = true) {
    const sorted = {};
    
    Object.keys(pricing).forEach(category => {
	const entries = Object.entries(pricing[category]);
	
	entries.sort(([, priceA], [, priceB]) => ascending ? priceA - priceB : priceB - priceA);
	
	sorted[category] = Object.fromEntries(entries);
    });
    
    return sorted;
}