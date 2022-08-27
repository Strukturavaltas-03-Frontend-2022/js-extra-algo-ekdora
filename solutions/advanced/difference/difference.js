const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

function getTheDifferenceBetweenTwoArrays (arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

console.log(getTheDifferenceBetweenTwoArrays(array1, array2));

export default getTheDifferenceBetweenTwoArrays
