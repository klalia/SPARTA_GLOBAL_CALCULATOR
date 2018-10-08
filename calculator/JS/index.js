
function calc(){
    var input1 = parseInt(prompt("First Number"));
    var operator = prompt("What operation?");
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
  else if (operator == "sqrt"){
    calculate = Math.sqrt(input1);
  }
  else if (operator == "^"){
    var input3 = parseInt(prompt("To the power of"));
    calculate = Math.pow(input1, input3);
  }
  console.log(calculate);
}

//
// function calc(){
//     var input = parseInt(prompt("Number"));
//     var advanced = prompt ("What operation?");
//     var calculate;
//
//   if (advanced == "sqrt"){
//     calculate = Math.sqrt(input);
//   }
//   else if (advanced == "^"){
//     var input3 = parseInt(prompt("To the power of"));
//     calculate = Math.pow(input, input3);
//   }
//   console.log(calculate);
// }
