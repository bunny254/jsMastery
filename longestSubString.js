/* Given a string, find the length of the longest substring without repeating characters */

const s='ddbacab';

const findLongestSub=(s)=>{
    if(s.length <=1){
        return s.length;
    }
    let longest=0;
    for(let p1=0; p1<s.length; p1++){
        let seenChar={}, currentLength=0;
        for(let p2=p1; p2<s.length; p2++){
            const currentChar=s[p2];
            if(!seenChar[currentChar]){
                currentLength++;
                seenChar[currentChar]=true;
                longest=Math.max(longest,currentLength);
            }else{
                break;
            }
        }
    }
    return longest;
}

console.log(findLongestSub(s));



//let s='abccdab'
//console.log(s.match('b'))