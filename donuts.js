const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

const sweeterDonuts=donuts.map(donut=>{
    donut +=' ' + 'hole';
    return donut;
})

console.log(sweeterDonuts);