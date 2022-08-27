const array1 = [1, 2, 3, 4, 5]
const num = 1

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        } else {
            return false
        }
    }
}

console.log(linearSearch(array1, num));

export default linearSearch
