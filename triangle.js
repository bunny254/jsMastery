const makeTriangle=(length)=>{
    let tri=''
    let line="*"
    for(let i=1; i<=length; i++){
        tri+=line.repeat(i)+"\n";
    }
    return tri;
}
console.log(makeTriangle(10));


