const facto=(input)=>{
    let product=1
    for(let i=input; i>=1; i--){
        product *=i
        //console.log(i);
    }
    return product;
}
console.log(facto(10));