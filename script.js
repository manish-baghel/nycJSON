let add = function(x,y){
  console.log("Value of x: "+x+" and Value of y: "+y);
  return new Promise((resolve,reject) => {
    if(x<0)
      reject("x should be greater than 0");
    resolve(x+y);
  });
}
exports.add = add;
