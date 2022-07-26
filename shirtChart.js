const shirtWidth = 20; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.38; // size M (medium)


if((shirtWidth ==18 || shirtWidth==19) && (shirtLength==28) && (shirtSleeve==8.13)){
    console.log("S");
} else if((shirtWidth==20|| shirtWidth==21) && (shirtLength==29) && (shirtSleeve==8.38)){
    console.log("M");
} else if((shirtWidth==22|| shirtWidth==23) && (shirtLength==30) && (shirtSleeve==8.63)){
    console.log("L");
} else if ((shirtWidth==24||shirtWidth==25) && (shirtLength==31) && (shirtSleeve==8.88)){
    console.log("XL");
} else if ((shirtWidth==26||shirtWidth==27) && (shirtLength==33) && (shirtSleeve==9.63)){
    console.log("2XL");
} else if ((shirtWidth==(28)) && (shirtLength==34) && (shirtSleeve==10.13)){
    console.log("3XL");
}
else{
    console.log("NA");
}



/*
let isSmall= (shirtWidth==(18||19)) && (shirtLength==28) && (shirtSleeve==8.13)
let isM= (shirtWidth==(20||21)) && (shirtLength==29) && (shirtSleeve==8.38)
let isL= (shirtWidth==(22||23)) && (shirtLength==30) && (shirtSleeve==8.63)
let isXL= (shirtWidth==(24||25)) && (shirtLength==31) && (shirtSleeve==8.88)
let is2XL= (shirtWidth==(26||27)) && (shirtLength==33) && (shirtSleeve==9.63)
let is3XL= (shirtWidth==(28)) && (shirtLength==34) && (shirtSleeve==10.13)

if(shirtLength==isSmall && shirtWidth==isSmall && shirtSleeve==isSmall){
    console.log("S");
}  */