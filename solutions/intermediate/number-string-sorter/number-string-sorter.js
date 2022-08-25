function numberAndStringSorter (arr) {
    const numArray = arr.filter(item => typeof item === 'number');
    const stringArray = arr.filter(item => typeof item === 'string');
    const mixedArray = [];
    
    for (let i = 0; i < numArray.length; i++) {
        mixedArray.push(numArray[i], stringArray[i]);
    }

    return mixedArray;
}

export default numberAndStringSorter
