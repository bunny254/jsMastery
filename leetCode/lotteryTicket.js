const tickets=["129300455", "5559948277", "012334556", "56789", "123456879"]

const detWinningTicket=(tickets)=>{
    let count=0;
    for(let i=0; i<tickets.lenght; i++){
        for(let j=0; j<tickets[i].lenght; j++){
            for(let k=j+1; k<tickets[k].length; k++){
                console.log(j);
                console.log(k);
            }
        }
    }
}

console.log(detWinningTicket(tickets));