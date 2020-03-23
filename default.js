/*function add(num1, num2){
    // default vale for num2 mechanism using condition
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
*/
function add(num1, num2 = 0){
    //num2 = num2 || 0;
    return num1 + num2;
}

const total = add(15);
console.log(total);