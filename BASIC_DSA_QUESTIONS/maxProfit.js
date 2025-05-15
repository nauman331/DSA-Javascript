function maxProfit(prices){
let minimum = Infinity;
let maxProfit = 0;
for(let i=0; i<prices.length; i++){
   if (prices[i] < minimum) {
      minimum = prices[i];
   }
    else if(prices[i] - minimum > maxProfit) {
      maxProfit = prices[i] - minimum;
   }
}
return maxProfit;


}



const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

