let array = [0,1,4,0,12,34]; // move all the zero element in last postion of array

let index = 0;

for (let i=0; i<array.length; i++){
    if(array[i] !== 0){
        array[index] = array[i]
        index++
    }
}

for (i=index; i<array.length; i++){
    array[i] = 0
}

console.log(array)