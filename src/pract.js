function greet(name) {
  console.log(`Hello ${name}`);
}

function greetMessage(greetfun) {
  const name = "Tushar";
  greetfun(name);
}

greetMessage(greet)