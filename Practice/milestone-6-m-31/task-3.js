const instructor =[
    {name:'nodi',age:28,position:'senior'},
    {name:'akil',age:26,position:'junior'},
    {name:'sobuj',age:26,position:'senior'},
]
const arr = instructor.filter(pos=>pos.position==='senior');
console.log(arr);
// console.log(2*2*2);
const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price}=product;
console.log(price);