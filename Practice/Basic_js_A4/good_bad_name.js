function checkName(name){
    if(typeof(name)!='string'){
        return "invalid";
    }else{
        const lower=name.toLowerCase();
        const last_char=lower.charAt(name.length-1);
        if(last_char==='a'||last_char==='e'||last_char==='i'||last_char==='o'||last_char==='u'||last_char==='y'||last_char==='w'){
            return "Good Name";
        }else{
            return "Bad Name";
        }
    }
}
const output= checkName("RAFEE");
console.log(output);