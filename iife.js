/*
const privateCounter = (()=>{
    let count = 0;
    console.log(`initial value: ${count}`);
    return ()=> {count +=1; console.log(count);}
})();
*/


const credits = ((num)=>{
    let credits  = num;
    console.log(`initial credits value: ${credits}`);
    return ()=>{
        credits -=1;
        if(credits>0) console.log(`PLaying game, ${credits} credits(s) remaining..`);
        if(credits<=0) console.log(`Not enough credits`);
    }
})(3);

credits();
credits();
credits();