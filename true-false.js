//falsy value:
// false
// 0 
// ""
// undefined
// NaN
// Null

// Truthy Value
// -1,-2--------- and +1, +2 ---------
// '0', ' ', [], {}
let name = false;
if(name){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}