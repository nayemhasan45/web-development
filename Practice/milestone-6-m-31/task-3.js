const instructor =[
    {name:'nodi',age:28,position:'senior'},
    {name:'akil',age:26,position:'junior'},
    {name:'sobuj',age:26,position:'senior'},
]
const arr = instructor.filter(pos=>pos.position==='senior');
console.log(arr);