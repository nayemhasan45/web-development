function findMin(numbers){
    let min=numbers[0];
    for(const number of numbers){
        if(number<min){
            min=number
        }
    }
    return min;
}
const heights = [167, 190, 120, 165, 137];
const min=findMin(heights);
console.log(min);