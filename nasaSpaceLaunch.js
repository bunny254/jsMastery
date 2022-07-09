let x=60;
while(x>=0){
    //console.log(`T-${x}`);
    if(x===50){
        console.log(`T-${x}Orbiter transfers from ground to internal power`);
    }
    else if(x===31){
        console.log(`T-${x}Ground launch sequencer is go for auto sequence start`);
    }
    else if(x===16){
        console.log(`T-${x}Activate launch pad sound suppression system`);
    }
    else if(x===10){
        console.log(`T-${x}Activate main engine hydrogen burnoff system`);
    }
    else if(x===6){
        console.log(`T-${x}Main engine start`);
    }
    else if(x==0){
        console.log(`T-${x}Solid rocket booster ignition and liftoff!`);
    }
    else{
        console.log(`T-${x}`);
    }
    x=x-1
}