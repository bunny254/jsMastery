const movie=(msgFnc,movieName)=>{
    msgFnc(movieName)
}

movie((favMovie)=>{
    console.log("My fav movie is "+ favMovie);
}, "Blended")