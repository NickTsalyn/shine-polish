

const base = 100;
const coff = 0.3;
const bathPrice = 30;

const discount = [
	{ name: "One-time service", value: 1 },          //"one-time"
	{ name: "Every week", value: 0.8 },        //"every week"
	{ name: "Every 2 weeks", value: 0.85 },       //"every 2 weeks"
	{ name: "Every 4 weeks", value: 0.9 },        //"every 4 weeks"
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
  selectedArea: string | number,
  discountType?: string | number
): number => {
  if (bedrooms === 1 && bathrooms === 1) {
    return base;
  }

  const areaCoefficient = area.find(area => area.name === selectedArea)?.value || 1;
  const discountValue = discount.find(discount => discount.name === discountType)?.value || 1;

  const basePrice = base * (1.1 + (bedrooms - 2) * coff) + bathrooms * bathPrice;
  const finalPrice = basePrice * areaCoefficient * discountValue

  return finalPrice;
};

console.log(getPrice(2, 4,  "Johns Creek"));
// console.log(getPrice(9, 9, 3));
// console.log(getPrice(9, 9, 3, "Johns Creek"));
// console.log(getPrice(1, 1, 1));
// console.log(getPrice(2, 3, 1));
// console.log(getPrice(4, 4.5, 3, 'Alpharetta'))

export default getPrice;
