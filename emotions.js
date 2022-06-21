const emotions=(msgFnc, ename)=>{
    msgFnc(ename)
}
const laugh=(num)=>{
    let string='ha'
    let multstring=""
    for(let i=0; i<num; i++){
        multstring += string
    }
    return multstring+'!';
}
emotions(()=>{
    console.log("I am happy,"+laugh());

});