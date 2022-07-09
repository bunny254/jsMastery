//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const array =[2,6,7,1]

const checkDuplicate= (array)=>{
    const dups=[];
    const compare=[]
    for(let num of array){
        if(!compare.includes(num)){
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(checkDuplicate(array)) 

    