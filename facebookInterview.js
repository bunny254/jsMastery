//Stock Interview Problem:

/* Given a list of prices, find the best day to buy and then sell to mazimize your profit */

const prices=[10,3,2,8,1,3,9]

const maxProfit=(prices)=>{
    let profit=[];
    for(let p1=0; p1<prices.length; p1++){
        for(let p2=p1+1; p2<prices.length; p2++){
            profit.push(prices[p2]-prices[p1])
        }
    }
    let actualProfit=Math.max(...profit);
    if(actualProfit>=1){
        return actualProfit
    }else{
        return 0;
    }
    //return actualProfit;
}

console.log(maxProfit(prices));