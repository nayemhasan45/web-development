function calculate_total(num1,num2,num3){
    const laptop=35000;
    const tablet = 15000;
    const mobile = 20000;
    const laptopCost = num1*laptop;
    const tabletCost = num2*tablet;
    const mobileCost = num3*mobile;
    const totalCost=laptopCost+tabletCost+mobileCost;
    return totalCost;
}
const total = calculate_total(2,1,1);
console.log(total);