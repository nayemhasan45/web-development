const avg = nums =>{
    let sum=0;
    for(let num of nums){
        num*=num;
        sum+=num;
    }
    const avg = sum/nums.length;
    return avg;
}
console.log(avg([2,2]));