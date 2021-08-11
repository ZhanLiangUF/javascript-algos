
//                                coinChange([1,2],3,{})
//                                +1 /       MIN      \+1
//                  coinChange([1,2],2,{})          coinChange([1,2],1,{})
//                  /+1             \+1
//     coinChange([1,2],1,{})      coinChange([1,2],0,{})
//     /+1                 \+1
// coinChange([1,2],0,{})    coinChange([1,2],-1,{})
//      |                           |
//    return 0                      return -1

var coinChange = function(coins, amount,dp={}) {
 let min=Infinity,count;
   if (amount in dp) return dp[amount];
   if (amount < 0) return -1;
   if (amount==0) return 0;
   for (let coin of coins) {
     count=coinChange(coins,amount-coin,dp);
     if (count!=-1) {
         min=Math.min(min,1+count);
     }
   }
   if (min === Infinity) {
       dp[amount]=-1;
       return dp[amount];
   } else {
       dp[amount]=min;
       return dp[amount];
   }
 };
