const findMax = (arr,arr2)=>{
    const newArr = [...arr,...arr2];
    const max = Math.max(...newArr);
    return max;
}
console.log(findMax([10,2,3],[4,5,6.6]));