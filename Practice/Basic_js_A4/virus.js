function deleteInvalids(numbers){
    if(!Array.isArray(numbers)){
        return "Invalid number :- Please provide an array";
    }else{
        const new_arr=[];
        for(const number of numbers){
            if(typeof(number)==='number'&&!isNaN(number)){
                new_arr.push(number);
            }
        }
        return new_arr;
    }
}
const new_arr=deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(new_arr);