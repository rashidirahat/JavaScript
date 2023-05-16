let str = "big black bug bit a big a black";

function countWords(str){
    const wordsInAr = str.split(" ");
    const result = wordsInAr.reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] = 1
        }else{
            obj[item]++
        }
        return obj;
    },{})
    return result;
}

const ans = countWords(str)

console.log("ans= ",ans) // ans=  { big: 2, black: 2, bug: 1, bit: 1, a: 2 }