const catMeow= (max)=>{
    let message="";
    for(let i=0; i<max; i++){
        message+="meow" + " "
    }
    return message;
}

const helloCat=(gallBack)=>{
    return "Hello " + gallBack(3);
}

console.log(helloCat(catMeow))