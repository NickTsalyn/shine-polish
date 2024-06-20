const base = 100;
const coff = 0.3;
const bathPrice = 30;

const discount = [
	{ name: 1, value: 1 },          //"one-time"
	{ name: 2, value: 0.8 },        //"every week"
	{ name: 3, value: 0.85 },       //"every 2 weeks"
	{ name: 4, value: 0.9 },        //"every 4 weeks"
];

const areas = [
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

const getPrice = (bed, bath, disc, area) => {
	if (bed === 1 && bath === 1) {
		return base;
	}

	let areaCoefficient = 1;
	for (let item of areas) {
		if (item.name === area) {
			areaCoefficient = item.value;
			break;
		}
	}

	let discountValue = 1;
	for (let item of discount) {
		if (item.name === disc) {
			discountValue = item.value;
			break;
		}
	}

	const basePrice = base * (1.1 + (bed - 2) * coff) + bath * bathPrice;
	const discountedPrice = basePrice * discountValue;
	const finalPrice = discountedPrice * areaCoefficient;

	return finalPrice;
};

// console.log(getPrice(4, 4.5, 3, "Buckhead"));
console.log(getPrice(9, 9, 3));
console.log(getPrice(9, 9, 3, "Johns Creek"));
// console.log(getPrice(1, 1, 1));
// console.log(getPrice(2, 3, 1));
// console.log(getPrice(4, 4.5, 3, 'Alpharetta'))
