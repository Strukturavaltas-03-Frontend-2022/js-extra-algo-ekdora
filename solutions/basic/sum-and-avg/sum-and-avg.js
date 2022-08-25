export function getSumOfTheElements (arr) {
    return arr.reduce((prev, curr) => prev + curr);
}

export function getAvarageOfTheElements (arr) {
    return getSumOfTheElements(arr) / arr.length; 
}
