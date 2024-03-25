function password(pass){
    const prop=['name','birthYear', 'siteName'];
    const property=Object.keys(pass);
    const check_digit=pass.birthYear;
    if(JSON.stringify(prop) === JSON.stringify(property)&&check_digit.toString().length===4){
        const site_name=(pass.siteName).charAt(0).toUpperCase() + (pass.siteName).slice(1);
        return site_name+'#'+(pass.name)+'@'+(pass.birthYear);
    }else{
        return "invalid";
    }
}

const newPass=password({ name: "maisha", birthYear: 2002 });
console.log(newPass);