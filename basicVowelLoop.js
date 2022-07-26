let s='javascriptloops';
for(let i=0; i<s.length; i++){
    if(s[i] =='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
        console.log(s[i])+ '/n';
    }
}
for(let p1=0; p1<s.length; p1++){
    if(s[p1]!=='a' && s[p1]!=='e' && s[p1]!=='i' && s[p1]!=='o' && s[p1]!=='u'){
        console.log(s[p1])+ '/n';
    }
}