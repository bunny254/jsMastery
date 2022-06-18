const laughFun=(times)=>{
    let laugh=""
    let sound="ha"
    for(let i=1; i<times; i++){
        laugh+=sound.repeat(i)+'!'+'\n'
    }
    return laugh
}

console.log(laughFun(4));