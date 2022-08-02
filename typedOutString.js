/* Given two strings S and T, return if they are equal when both are typed out. Any '#' that appears in the string counts as a backspace." */

const S="b#d"
const T="ad#d"

const checkIfEqual=(S,T)=>{
    finalT=[];
    finalS=[];
    for(let i=0; i<S.length; i++){
        if(S[i]!='#'){
            finalS.push(S[i])
        }else{
            finalS.pop()
        }
    }
    for (let j=0; j<T.length; j++){
        if(T[j]!='#'){
            finalT.push(T[j])
        }else{
            finalT.pop()
        }
    }
    if(finalS.toString()===finalT.toString()){
        return true;
    }else{
        return false;
    }

}

console.log(checkIfEqual(S,T));