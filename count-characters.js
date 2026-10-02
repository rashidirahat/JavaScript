const str = "Welcome to john deere its a deere company";

const countCharacters = (str) =>{
    const removeWhiteSapce = str.split(" ").join(""); // ['Welcome', 'to', 'john', 'deere', 'its', 'a', 'deere', 'company'] => Welcometojohndeereitsadeerecompany
    const charInAr = removeWhiteSapce.split(""); // ['W', 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'j', 'o', 'h', 'n', 'd', 'e', 'e', 'r', 'e', 'i', 't', 's', 'a', 'd', 'e', 'e', 'r', 'e', 'c', 'o', 'm', 'p', 'a', 'n', 'y']

    const result = charInAr.reduce((obj,item)=>{
        // first teration obj = {}, item = 'W' => obj['W'] = 1
        // second teration obj = {W:1}, item = 'e' => obj['e'] = 1
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