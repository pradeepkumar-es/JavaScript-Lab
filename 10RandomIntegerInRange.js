// https://codedamn.com/problem/USS7M_hvMrnTQl1iE8ftg?challenge-list=50-days-of-js
export const randomInRange = (min, max) => {
	// Write your code here
	// return min+Math.random()*(max-min); // random float point number b/w [min,max);
	let rand1 = min + Math.random() * (max - min); //this will not give equal probability of edge number with MAth.random() as it return nearest integer and in mid case (integer.5) it return greater near integer
	//so we need to strech edge by 0.5 before rounding
	let rand2 = min - 0.5 + Math.random() * (max + 0.5 - (min - 0.5));

	//alternative case using Math.floor() by streching max by 1 (min to max+1) bcz it round to lower integer
	let rand3 = min + Math.random() * (max + 1 - min);
	return Math.round(rand2);
}
