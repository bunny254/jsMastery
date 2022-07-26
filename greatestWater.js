allay=[11]

const greatestWater=(allay)=>{
    let maxArea=0;
    for(let p1=0; p1<allay.length; p1++){
        for (p2=p1+1; p2<allay.length; p2++){
            let area= Math.min(allay[p2,p1]) * (p2-p1)
            maxArea=Math.max(maxArea,area)
        }
    }
    return maxArea;
}
console.log(greatestWater(allay));