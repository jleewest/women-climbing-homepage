function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

function goClimb() {
  let name = prompt("What is your name?");
  if (name !== null) {
    let email = prompt("Hello, " + name + "! What is your email?");
    if (email !== null) {
      alert("Thank you " + name + ", we look forward to climbing with you!");
    } else {
      alert("Sorry, your email was not valid");
    }
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let climbButton = document.querySelector(".climb");
climbButton.addEventListener("click", goClimb);
