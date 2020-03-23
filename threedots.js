const age = [25, 35, 22, 33];
const age2 = [21, 32, 88];
const age3 = [45, 68, 22, 55];
const allAges = age.concat(age2).concat([10]).concat(age3);
const allAges2 = [...age, ...age2, 10, ...age3];
//console.log(allAges2);

const minister = 550;
const business = 600;
const sochib = 200;
const maximum = Math.max(minister, business, sochib);
//console.log(maximum);
const takaPaisha = [400, 500, 666];
const maximum2 = Math.max(...takaPaisha);
console.log(maximum2);