type ICountList = { [key: string]: number };

export default function countBy(arr: (string | number)[]) {
	return arr.reduce((acc: ICountList, item) => {
		acc[item] ? acc[item] + 1 : 1;
		return acc;
	}, {});
}
