// Write a JavaScript program to get the index of an object by it's property.

arrayObj = [{
    prop_1: 'val_1',
    prop_2: 'val_2',
    prop_3: 'val_3'
}, {
    prop_1: 'val_4',
    prop_2: 'val_5',
    prop_3: 'val_6'
}]

const getIndexOfObjectByProperty = (array, property, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            return i;
        }
    }
    return -1;
}

console.log(getIndexOfObjectByProperty(arrayObj, 'prop_1', 'val_4'));

// Input:  
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

