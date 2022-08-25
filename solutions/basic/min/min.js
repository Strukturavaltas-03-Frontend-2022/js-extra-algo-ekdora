function getTheSmallestElement (arr) {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min) {
            min = element;
        }
    })

    return min;
};

/* function getTheSmallestElement (arr) {
    return arr.reduce((prev, curr) => prev < curr ? prev : curr);
} */


export default getTheSmallestElement
