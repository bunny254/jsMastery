array=[9,4,8,10,5,6];

target=20;
const threeSum=(array,target)=>{
    let sum;
    for(let p1=0; p1<array.length; p1++){
        for(let p2=p1+1; p2<array.length; p2++){
            for (let p3=p2+1; p3<array.length; p3++){
                sum = array[p1]+array[p2]+array[p3]
                if(sum==target){
                    return [array[p1], array[p2], array[p3]]
                }
            }
        }
    }
} 

console.log(threeSum(array,target));