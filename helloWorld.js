const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', (answer) => {
  console.log(`You entered: \n${answer}`);
  rl.close();
});