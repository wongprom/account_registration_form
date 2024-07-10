const formSelect = document.querySelector(".form-select");
/* const fullName = formSelect.querySelector("#fullname");
const username = formSelect.querySelector("#username");
const email = formSelect.querySelector("#email");
const confirm = formSelect.querySelector("#confirm"); */
const passwordValue = formSelect.querySelector("#password").value;

let isFormValid = true;
// Error messages for inputs


const registrationData = {
  name: "",
  username: "",
  email: "",
  password: "",
};

// Validate password min 8 char
password.addEventListener("keyup", (event) => {
  const password = formSelect.querySelector("#password");
  /* event.target.value.length < 8 ? password.classList.add("border-red") : password.classList.add("border-red") */
  if (event.target.value.length < 8) {
    password.classList.add("border-red");
    const errorPassword = document.querySelector('#errorPassword');
    errorPassword.textContent = "Error password fel ";
    isFormValid = false;
  } else {
    password.classList.remove("border-red");
    errorPassword.textContent = "";
    registrationData.name = event.target.value;
  }
});

console.log("registrationData: ",registrationData)

formSelect.addEventListener("submit", (event) => {
  event.preventDefault();
});

