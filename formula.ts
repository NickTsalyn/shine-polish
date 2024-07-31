import axios from "axios";

const getData = async() => {
	try {
		const response = await axios.get('https://shine-polish-server.onrender.com/bookings/options')
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getPrice = async (
	bedrooms: number,
	bathrooms: number,
	selectedArea?: string | number,
	discountType?: string | number,
	selectedService?: string | number,
	selectedExtras?: string[]
) => {

	const {areaOptions, discountOptions, serviceOptions, extrasOptions, base, coff, bathPrice} = await getData()


	const areaCoefficient = areaOptions.find((area: any) => area.name === selectedArea)?.value || 1;
	const discountValue = discountOptions.find((discount: any) => discount.name === discountType)?.value || 1;
	const cleaningValue = serviceOptions.find((service: any) => service.name === selectedService)?.value || 1;
	const extraValue = extrasOptions.reduce((acc: number, item: any) => {
		if (selectedExtras?.includes(item.name)) {
			return acc + item.value
		} else {
			return acc
		}
	}, 0);

	if (bedrooms === 1 && bathrooms === 1) {
		return base 
	}

	const basePrice = base * (1.1 + ((bedrooms) - 2) * coff) + (bathrooms) * bathPrice;
	const finalPrice = basePrice * areaCoefficient * discountValue * cleaningValue + extraValue
	return finalPrice;
};

export default getPrice;