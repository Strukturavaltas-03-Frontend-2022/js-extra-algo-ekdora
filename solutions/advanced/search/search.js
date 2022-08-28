const array1 = [1, 2, 3, 4, 5];
const num = 1;

function linearSearch(arr, value) {
    let result = false;
    for (let i = 0; i < arr.length && !result; i++) {
        result = arr[i] === value;
    }

    return result;
}

console.log(linearSearch(array1, num));

export default linearSearch
