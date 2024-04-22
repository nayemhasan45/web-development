// use map
const odds = [1,3,5,7,9,11];
for(const even of odds){
    console.log(even+1);
}
const newAr=odds.map(even=>even+1);
console.log(newAr);

// find divisible by 10
const divisible = [33,50,79,78,90,101,30];

// with for loop
const newArr=[];
for(const byTen of divisible){
    if(byTen%10===0){
        newArr.push(byTen);
    }
}
console.log(newArr);

// use filter 
const byTen=divisible.filter(num=>num%10===0);
console.log(byTen);

// use find 
const finder = divisible.find(num=>num%10===0);
console.log(finder);