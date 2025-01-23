let guess = prompt("pls guess the secret num");
let secretnum = 50;
if (guess ==50) {
  console.log("wonderful u got it right");
} else if (guess <= 45) {
  console.log("try again it is very low");
} else if (guess >= 55) {
  console.log("to high try again");
} else {
  console.log("pls try again");
}

