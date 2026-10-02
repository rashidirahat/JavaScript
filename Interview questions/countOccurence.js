let array = [1,4,2,1,5,2,4,2,5]; // count the each element occurance in the array

let count = new Object();

for (let i=0; i<array.length; i++){
    if(!count[array[i]]){
         count[array[i]] = 0
    }
    count[array[i]] = count[array[i]] + 1
    
}
console.log(count)