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
const savings = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(savings);
