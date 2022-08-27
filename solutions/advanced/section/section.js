const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

function getSectionOfTwoArrays(arr1, arr2) {
    const sectionOfTwoArrays = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sectionOfTwoArrays.push(arr1[i]);
            }
        }
    }
    return [...new Set(sectionOfTwoArrays)];
}

console.log(getSectionOfTwoArrays(array1, array2))

export default getSectionOfTwoArrays
