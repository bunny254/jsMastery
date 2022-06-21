const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
const teams=[team1,team2,team3,team4]
const hasEnoughPlayer=(teams)=>{
    let team=[]
    for(let i=0; i<teams.length; i++){
        if(teams[i].length<7){
            team+=false + '\n'
        } else{
            team+=true + '\n'
        }
    }
    return team;

}
/*
let team=[]
if(team1.length<7){
    team=false;
}else{
    team=true
} */
console.log(hasEnoughPlayer(teams)); 