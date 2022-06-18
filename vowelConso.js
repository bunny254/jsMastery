const vowelsAndConsonants=(s)=>{
    let vowDic="aeiouAEIOU";
    let vow=""
    let conso=""
    let word=""
    for(let i=0; i<s.length; i++){
        if(i==vowDic){
            vow +=i + '\n'
        }
        else{
            conso +=i + '\n'
        }
        word=vow+conso
    }
    return word
}

console.log(vowelsAndConsonants("javascriptloops"));