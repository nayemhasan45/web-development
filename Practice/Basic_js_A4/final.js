function calculateMoney(price){
    const gard=500;
    const food_cost=50*8;
    const total_cost=gard+food_cost;
    const ticket_price = 120;
    let profit = 0;
    if(price<0){
        return "enter a positive number "
    }else{
        profit=(ticket_price*price)-total_cost;
    }
    return profit;
}
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
function monthlySavings(payments,livingCost){
    if(Array.isArray(payments)&&typeof(livingCost)==='number'){
        let totalIncome = 0;
        for(const payment of payments){
            if(payment>=3000){
                const tax = (20/100)*payment;
                const afterTax=payment-tax;
                totalIncome+=afterTax;
            }else{
                totalIncome+=payment;
            }
        }
        const totalSavings = totalIncome-livingCost;
        if(totalSavings<0) return 'earn more';
        else return totalSavings;
    }else{
        return 'invalid input';
    }
}