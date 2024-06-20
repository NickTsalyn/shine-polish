const base = 100;
const coff = 0.25;
const bathPrice = 30;

export const discount = [
	{ name: "One-time service", value: 1 },
	{ name: "Every week", value: 0.8 },
	{ name: "Every 2 weeks", value: 0.85 },
	{ name: "Every 4 weeks", value: 0.9 },
];

export const area = [
	{ name: "Midtown", value: 1 },
	{ name: "Buckhead", value: 1 },
	{ name: "Sandy Springs", value: 1 },
	{ name: "Smyrna", value: 1.15 },
	{ name: "Dunwoody", value: 1.15 },
	{ name: "Roswell", value: 1.15 },
	{ name: "Decatur", value: 1.15 },
	{ name: "Alpharetta", value: 1.25 },
	{ name: "Johns Creek", value: 1.25 },
	{ name: "Marietta", value: 1.25 },
	{ name: "Downtown", value: 1.25 },
];

export const getPrice = (
	bedrooms: number,
	bathrooms: number,
	selectedArea?: string | number,
	discountType?: string | number
) => {

	const areaCoefficient = area.find((area) => area.name === selectedArea)?.value || 1;
	const discountValue = discount.find((discount) => discount.name === discountType)?.value || 1;

	if (bedrooms === 1 && bathrooms === 1) {
		return base 
	}

	const basePrice = base * (1.1 + ((bedrooms) - 2) * coff) + (bathrooms) * bathPrice;
	const finalPrice = basePrice * areaCoefficient * discountValue;

	return finalPrice;
};

export default getPrice;