const str = "Welcome to john deere its a deere company";

const countCharacters = (str) =>{
    const removeWhiteSapce = str.split(" ").join("");
    const charInAr = removeWhiteSapce.split("");

    const result = charInAr.reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] = 1;
        }else{
            obj[item]++
        }
        return obj;
    },{})

    return result;
}

const ans = countCharacters(str);
console.log("count char= ",ans); // {w:1,e:8,l:1,c:2,o:4...}