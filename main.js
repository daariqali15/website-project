// Quiz Code

// Add Event Listener to Button
document.getElementById("btn").addEventListener("click", btnClicked);

// Declare Variables
let OutputTotal = 0;
let q1ACoorect = 0;
let q2ACoorect = 0;
let q3ACoorect = 0;
let q4ACoorect = 0;

function btnClicked() {
  //variables
  OutputTotal = 0;
  let q1A = document.getElementById("Q1").value;
  let q2A = document.getElementById("Q2").value;
  let q3A = document.getElementById("Q3").value;
  let q4A = document.getElementById("Q4").value;
  // Mark Question 1
  if (q1A === "uniqe") {
    document.getElementById("out1").innerHTML =
      "Correct, setups are ment to be uniqe!";
    q1ACoorect = 1;
  } else {
    document.getElementById("out1").innerHTML =
      "Incorrect, the correct answer is uniqe!";
    q1ACoorect = 0;
  }

  // Mark Question 2

  if (q2A === "express") {
    document.getElementById("out2").innerHTML =
      "Correct, a setup must be able to express your intrest and your hobbies!";
    q2ACoorect = 1;
  } else {
    document.getElementById("out2").innerHTML =
      "Incorrect, the corrent answer in express!";
    q2ACoorect = 0;
  }

  // Mark Question 3

  if (q3A === "lights") {
    document.getElementById("out3").innerHTML =
      "Correct, a good way to change the apperence of your room is with lights!";
    q3ACoorect = 1;
  } else {
    document.getElementById("out3").innerHTML = "Incorrect, answer was lights!";
    q3ACoorect = 0;
  }

  // Mark Question 4

  if (q4A === "cable box") {
    document.getElementById("out4").innerHTML =
      "Correct, If you ever have messy cables a good way to sort of organise them is with a cable box or rack!";
    q4ACoorect = 1;
  } else {
    document.getElementById("out4").innerHTML =
      "Incorrect, the awnser was cable box!";
    q4ACoorect = 0;
  }

  //Post Processing
  OutputTotal = q1ACoorect + q2ACoorect + q3ACoorect + q4ACoorect;
  let OutputPercent = (OutputTotal / 4) * 100;

  //output
  document.getElementById("output1").innerHTML = `${OutputTotal}/4`;
  document.getElementById("output2").innerHTML = `You got a ${OutputPercent}%!`;
}
