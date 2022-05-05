filterOutOdds = (...argument) => {
    return argument.filter(num => num % 2 === 0);
}

findMin = (...nums) => {
    return Math.min(...nums);
}

mergeObjects = (obj, objAgain) => {
    return {...obj, ...objAgain};
}

doubleAndReturn = (arr, ...argument) => {
    return [...arr, ...argument.map((value) => value * 2 )];
}

removeItems = (items) => {
    let random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
    //getting where to slice was the HARDEST part of all of this lolgit
}

extend = (array1, array2) => {
    return [...array1, ...array2];
}

addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}

removeKey = (obj, key) => {
    return obj = {[key]: undefined, ...obj };
}

combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

update = (obj, key, val) => {
    return {...obj, key: [val]};
}