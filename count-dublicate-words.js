let str = "big black bug bit a big a black";

const findDublicateWrd = (str) => {
  const strAr = str.split(" ");
  //console.log("1", strAr);
  const res = [];
  for (let i = 0; i < strAr.length; i++) {
    //console.log("index of = ", strAr[i].indexOf(strAr[i]));
    // console.log("lastIndex of= ", strAr[i].indexOf(strAr[i]));
    if (strAr.indexOf(strAr[i]) !== strAr.lastIndexOf(strAr[i])) {
      if (!res.includes(strAr[i])) {
        res.push(strAr[i]);
      }
    }
  }
  return res.join(" ");
};

const val = findDublicateWrd(str);
//console.log("val= ", val);
