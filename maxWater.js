//You are given an array of positive integers where each integer represents the height  on a vertical; line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of the water it would hold.

const array =[5,10,2,3,12]

const greatestWater =(array)=>{
    let maxWater=0;
    for(let p1=0; p1<array.length; p1++){
        for (let p2=p1+1; p2<array.length; p2++){
            const height= Math.min(array[p1],array[p2]);
            const length= p2-p1;
            const area= height * length;
            maxWater= Math.max(maxWater,area)
        }

    }
    return maxWater;
}

console.log(greatestWater(array));
