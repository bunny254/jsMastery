nums=[1,2,3,4,5,6]
const ifOdd=(nums)=>{
    let result=[];
    nums.forEach(num => {
       if (num %2==0){
        result+=num+' '
       } 
    })
    return result; 
}
console.log(ifOdd(nums));
