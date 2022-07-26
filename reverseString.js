/* words=["too many"];
newWords= words.split('');
    console.log(newWords);
    
const reverseString=(words)=>{
    if(words== null || words.length==0){
        return "";
    }
    //split words
    newWords= words.split('');
    console.log(newWords);
} */
/*var str = 'foobar'; 
var arr = str.split(''); 
console.log(arr); */
/////
let word=["Bunny Wave"];
let reversd=[""];
//console.log(word);
let newWord=word.join("").toString().split('')
for (let p1=newWord.length-1; p1>=0; p1--){
    let reversed=newWord[p1].toString()
    //console.log (reversed.substring());
    reversd.push(reversed)
}
console.log(word);
console.log(reversd);
 