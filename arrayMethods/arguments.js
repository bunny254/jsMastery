let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append() {
      [].push.call(this, ...arguments);
    },
  };
  greetings.append('Ohoro', 'Harro');
  
  console.log(greetings);