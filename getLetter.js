let s='adfgt'
function getLetter(s) {
    let letter
    ;
    // Write your code here
    switch (s){
        case (s[0]=='a' ||s[0]=='e' || s[0]=='i' || s[0]=='o' || s[0]=='u'):
        letter="A"
        break;
        case (s[0]=='b' ||s[0]=='c' || s[0]=='d' || s[0]=='e' || s[0]=='f' || s[0]=='g' ):
        console.log("B")
        break;
        case (s[0]=='h' ||s[0]=='j' || s[0]=='k' || s[0]=='l' || s[0]=='m' ):
        console.log("C")
        break;
        case (s[0]=='n' ||s[0]=='p' || s[0]=='q' || s[0]=='r' || s[0]=='s' || s[0]=='t' || s[0]=='v' || s[0]=='w' || s[0]=='x' ||s[0]=='y' || s[0]=='z'):
        console.log("D")
        break;
    }
            
    return letter;
}

console.log(getLetter(s))