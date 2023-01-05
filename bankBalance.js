let balance=0;
let isActive=true;
let checkbalance=true;

if(checkbalance==true && isActive==true && balance>=0){
  console.log(`Dear customer your balance is $${balance}`);
}
else if(checkbalance==true && isActive==false && balance>0){
  console.log(`Your Account is no longer active`);
}
else if(checkbalance==true && isActive==false && balance==0){
  console.log(`Your account is empty`);
}
else if(checkbalance==true && isActive==false && balance<0){
  console.log(`You owe us!`);
}
else{
  console.log(`Thank you have a good day!`);
}
