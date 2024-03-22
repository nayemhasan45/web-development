function length_str(names){
    let min=Number.MAX_SAFE_INTEGER;
    for(const name of names){
        if(name.length<min){
            min=name.length;
        }
        // console.log(name.length);
    }
    return min;
}
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const minName=length_str(friends);
console.log(minName);