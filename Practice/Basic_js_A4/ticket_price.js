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
const profit = calculateMoney(93);
console.log(profit);