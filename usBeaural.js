let education="a Profession degree"
let salary;
switch(education){
    case "a high school diploma":
        salary="$35,636/year";
        break;
    case "an Associate's degree":
        salary="$41,496/year";
        break;
    case "a Bachelor's degree":
        salary="$59,124/year";
        break;
    case "a Master's degree":
        salary="$69,732/year";
        break;
    case "a Profession degree":
        salary="$89,960/year";
        break;
    case "a Doctoral degree":
        salary="$84,396/year";
        break;
    default:
        salary="$25,636/year";
    
}
console.log("A"+" "+education+"attracts"+' '+salary ) 