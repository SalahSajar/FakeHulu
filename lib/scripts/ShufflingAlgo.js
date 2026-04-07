export const ShufflingAlgo = (arr=[0,1,2,3,4,5,6,7,8,9]) => {
	const len = arr.length;

	for(let i = len; i > 0; i--){
		const randomItemIdx = Math.floor(Math.random() * i--);

		const ShiftingItem = arr[i];
		arr[i] = arr[randomItemIdx];
		arr[randomItemIdx] = ShiftingItem;
	}

	return arr;
}