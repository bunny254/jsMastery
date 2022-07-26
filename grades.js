let score=6;

const findGrade=(score)=>{
    let Grade='';
    if(score>25 && score<=30){
        Grade='A'
    }else if(score>20 && score <=25){
        Grade='B'
    }
    else if(score>15 && score <=20){
        Grade='C'
    }
    else if(score>10 && score <=15){
        Grade='D'
    }
    else if(score>5 && score <=10){
        Grade='E'
    }
    else if(score>=0 && score<=5){
        Grade='F'
    }
    return Grade;
}

console.log(findGrade(score))