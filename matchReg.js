const word= "The Sexy girl jumped into my heart!";
const re=/sexy\s(girl).+?(heart)/ig;
const result=re.exec(word)

console.log(result);