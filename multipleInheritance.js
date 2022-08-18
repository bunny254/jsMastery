const dog={
    hasTail:true,
}
const snake={
    isWild:true,
}
const hyena={
    hasEyes:true,
}

let jackle=Object.assign(dog,snake,hyena)

console.log(jackle);