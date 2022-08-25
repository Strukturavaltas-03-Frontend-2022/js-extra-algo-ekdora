function getTheLargestElement (arr) {
    let max = arr[0];
    arr.forEach(element => {
        if (element > max) {
            max = element;
        }
    })

    return max;
};

export default getTheLargestElement
