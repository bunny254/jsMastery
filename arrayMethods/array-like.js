let greetings = {
    0:'Hi',
    1:'Hello',
    length:2,
    append(message){
        [].push.call(this, message);
    },
};

greetings.append('Heya');
greetings.append('Bonjour');


console.log(greetings);