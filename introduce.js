let asme=(function (){
    let nickname="Bunny!";
    return {
        introduce:function(){
            console.log(`Hi my nickname is ${nickname}`);
        }
    };
})();
console.log(asme.introduce());