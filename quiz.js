// JavaScript Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("Q1").value.toLowerCase();
  let answer2 = document.getElementById("Q2").value.toLowerCase();
  let answer3 = document.getElementById("Q3").value.toLowerCase();
  let answer4 = document.getElementById("Q4").value.toLowerCase();

  let output1 = 0;
  let output2 = 0;
  let output3 = 0;
  let output4 = 0;

  // quiz
  if (answer1 == "uniqe") {
    document.getElementById("Q1").style.backgroundColor = "green";
    document.getElementById("out1").innerHTML = `correct`;
    output1 = 1;
  } else {
    document.getElementById("Q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `wrong, The correct answer is "uniqe"`;
    output1 = 0;
  }

  if (answer1 == "express") {
    document.getElementById("Q2").style.backgroundColor = "green";
    document.getElementById("out2").innerHTML = `correct`;
    output2 = 1;
  } else {
    document.getElementById("Q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `wrong, The correct answer is "express"`;
    output2 = 0;
  }

  if (answer1 == "LIGHTS") {
    document.getElementById("Q3").style.backgroundColor = "green";
    document.getElementById("out3").innerHTML = `correct`;
    output3 = 1;
  } else {
    document.getElementById("Q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `wrong, The correct answer is was LIGHTS`;
    output3 = 0;
  }

  if (answer1 == "...") {
    document.getElementById("Q4").style.backgroundColor = "green";
    document.getElementById("out4").innerHTML = `correct`;
    output4 = 1;
  } else {
    document.getElementById("Q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `wrong, The correct answer is ...`;
    output4 = 0;
  }

  //process
  let score = (result1 + result2 + result3 + result4 divide by 4) * 100;
  let whole = result1 + result2 + result3 + result4;
  //output
  document.getElementById("output").innerHTML =
    `you got ` + score + ` quiz, congratulations!!!`;

  document.getElementById("scores").innerHTML =
    `you got ` + whole + `/4! ` + score + `%`;
}
