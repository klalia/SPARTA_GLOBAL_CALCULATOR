var option =prompt("Which calculator?(r = regualar(+, -, *, /) & a = advanced(sqrt, *))");

if (option == "r"){
function calc (){
    var input1 = parseInt(prompt("First Number"));
    var operator = prompt("What operation? (+, -, *, /)");
    var calculate;

   if (operator == "+"){
    var input2 = parseInt(prompt("Second Number"));
    calculate = input1 + input2;
  }
  else if (operator == "-"){
    var input2 = parseInt(prompt("Second Number"));
    calculate = input1 - input2;
  }
  else if (operator == "*"){
    var input2 = parseInt(prompt("Second Number"));
    calculate = input1 * input2;
  }
  else if (operator == "/"){
    var input2 = parseInt(prompt("Second Number"));
    calculate = input1 / input2;
  }
  else {
    console.log("NO!");
  }
  console.log(calculate);
  }
}

if (option == "a"){
  function calc(){
    var input1 = parseInt(prompt("First Number"));
    var operator = prompt("What operation? (sqrt, *)");
    var calculate;

  if (operator == "sqrt"){
    calculate = Math.sqrt(input1);
  }
  else if (operator == "^"){
    var input3 = parseInt(prompt("To the power of"));
    calculate = Math.pow(input1, input3);
  }
  else {
    console.log("NO!");
  }
  console.log(calculate);
}
}
else {
  console.log("Not a calculator!");
}

  calc();
