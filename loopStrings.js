let input='javascriptloops';

/*
const loopStrings=(input)=>{
    for(let i=0; i<input.length; i++){
        if(input[i]==='a' || input[i]=='e' || input[i]=='i' || input[i]=='o' || input[i]=='u'){
            console.log(input[i])+ '\n';
        }
    }
} 

console.log(loopStrings(input));
*/

const loopStrings=(input)=>{
    let vowels=[];
    let consonants=[];
    for(let p1=0; p1<input.length; p1++){
       if(input[p1]==='a' || input[p1]=='e' || input[p1]=='i' || input[p1]=='o' || input[p1]=='u'){
        vowels.push(input[p1])+'n/'
        //console.log(input[p1]+'n/');
       }else{
        consonants.push(input[p1])+'n/'
        //console.log(input[p1]+'n/');
       }
    }
    let final=vowels.concat(consonants);
    final=final.toString();
    return final;
}

console.log(loopStrings(input));