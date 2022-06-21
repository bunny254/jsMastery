const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
let final=[];
for(let i=0; i<test.length; i++){
    if(test[i]%3===0){
        final +=test[i]+100 + "\n"
    }
    else{
        final +=test[i] + '\n'
    }
}
console.log(final);             