const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

function getUnionOfTwoArrays (arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(getUnionOfTwoArrays(array1, array2));

export default getUnionOfTwoArrays
