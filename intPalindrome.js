const checkPalindrome= (x)=>{
    let reversed= x.toString().split('').reverse().join('')
    console.log(reversed);
    return (x.toString()===reversed)
}

console.log(checkPalindrome(401));