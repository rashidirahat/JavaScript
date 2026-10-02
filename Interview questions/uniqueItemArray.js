const arra = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

const uniqueArray = (arra) => {
    const uniqArr  = []

    for (let i=0; i<arra.length; i++){
        if(!uniqArr.includes(arra[i])){
            uniqArr.push(arra[i])
        }
    }
    return uniqArr
}

