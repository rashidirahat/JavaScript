// Q : from the given array find the element which appears more than half of the size of the array
// [3, 3, 4, 2, 4, 4, 2, 4, 4];
function findMajorityElement(arr) {
    let obj = new Object(); // {}
    const halfSize = arr.length / 2; // 4.5
    //console.log("halfSize= ", halfSize);

    for (let i = 0; i < arr.length; i++) {
        console.log("obj= ", obj);
        const element = arr[i]; // 3, //3 // 4
        if (!obj[element]) {
            obj[element] = 1; // {3:1} // {3:2,4:1}
        } else {
            obj[element]++; // {3:2}
        }
        console.log("element= ", obj[element]);
        if (obj[element] > halfSize) {
            return element;
        }
    }

    return null; // No majority element found
}

// Example usage:
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 4