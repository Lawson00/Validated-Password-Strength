let userPassword = document.getElementById("user-password");
let msgOutput = document.querySelector(".msg-output");

const passwords = ["Weak", "Medium", "Strong"];
let count = 0;
function showPasswordStrength() {
  if (userPassword.value.length < 0) {
    msgOutput.innerHTML = `Password is ${passwords[count]}`;
    userPassword.style.borderBottomColor = "red";
  }
  if (userPassword.value.length <= 4) {
    msgOutput.innerHTML = `Password is ${passwords[count]}`;
    userPassword.style.borderBottomColor = "red";
    msgOutput.style.color = "red";
  }
  if (userPassword.value.length > 4 && userPassword.value.length <= 8) {
    msgOutput.innerHTML = `Password is ${passwords[count + 1]}`;
    userPassword.style.borderBottomColor = "yellow";
    msgOutput.style.color = "yellow";
  }
  if (userPassword.value.length > 8) {
    msgOutput.innerHTML = `Password is ${passwords[count + 2]}`;
    userPassword.style.borderBottomColor = "green";
    msgOutput.style.color = "green";
  }
}

userPassword.addEventListener("input", () => {
  if (userPassword.value == "") {
    msgOutput.innerHTML = "";
    msgOutput.style.color = "black";
  } else {
    showPasswordStrength();
  }
  console.log("hello");
});
