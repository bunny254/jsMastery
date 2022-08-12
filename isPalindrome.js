const s="a";

const ifPalindrome=(s)=>{
    if(s.length<=1){
        return true;
    }
    clean=s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let reversed="";
    let valid;
    for(let p1=clean.length-1; p1>=0; p1--){
        reversed+=clean[p1]
    }
    for(let p2=0; p2<clean.length; p2++){
        for(let p3=0; p3<reversed.length; p3++){
            if(clean[p2]===reversed[p3]){
                valid=true;
            }else{
                valid=false;
            }
        }
    }
    return valid;
}

console.log(ifPalindrome(s));