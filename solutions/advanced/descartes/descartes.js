const array1 = [1, 2, 3,];
const array2 = [3, 4, 5];

function getCartesianProductBetweenTwoArrays(arr1, arr2) {
    const descartesOfArrays = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            descartesOfArrays.push(arr1[i] * arr2[j]);
        }
    }
    return descartesOfArrays;
}

console.log(getCartesianProductBetweenTwoArrays(array1, array2));


export default getCartesianProductBetweenTwoArrays
