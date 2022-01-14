const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("game start!", (answer: string) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});