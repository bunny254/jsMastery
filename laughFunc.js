const laugh=(num)=>{
    let string='ha'
    let multstring=""
    for(let i=0; i<num; i++){
        multstring += string
    }
    return multstring+'!';
}

console.log(laugh(3));