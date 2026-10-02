function cofee (tall){
    return function(type){
        return function(syrup){
            return 'hello your cofee is ready'
        }
    }
}

const talOrder = cofee("tal");
const typeorder = talOrder("black");

console.log(typeOrder("light sugar"))