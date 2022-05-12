const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");

password.addEventListener("input", comparePassword)
repeatPassword.addEventListener("input", comparePassword)

function comparePassword (e) {
  if (password.value === repeatPassword.value){
    e.target.setCustomValidity("");
  }
  else {
    e.target.setCustomValidity("* Passwords do not match")
    e.target.reportValidity();
  }
}