const formSelect = document.querySelector(".form-select");
const fullName = formSelect.querySelector("#fullname");
const username = formSelect.querySelector("#username");
const email = formSelect.querySelector("#email");
const confirm = formSelect.querySelector("#confirm");
const submitBtn = formSelect.querySelector("#submit-btn");

const password = formSelect.querySelector("#password");
let isFormValid = false;
submitBtn.disabled = !isFormValid;

emailIsOk = false

document.addEventListener("keyup", () => {
  console.log("evrnt på document");
  // se om fullname är valid
console.log("emailIsOk: ", emailIsOk)
  // disable button or not!!!!!!!!!
  if (
    fullName.value != "" &&
    password.value.length > 7 &&
    username.value != "" &&
    password.value === confirm.value &&
    emailIsOk
  ) {
    isFormValid = true;
    submitBtn.disabled = !isFormValid;
  } else {
    isFormValid = false;
    submitBtn.disabled = !isFormValid;
  }

  //se om password är valid
});

fullName.addEventListener("keyup", () => {
  if (fullName.value === "") {
    const errorFullname = document.querySelector("#errorFullname");
    errorFullname.textContent = "Enter fullname";
  } else {
    errorFullname.textContent = "";
  }
});

username.addEventListener("keyup", () => {
  if (username.value === "") {
    const errorUsername = document.querySelector("#errorUsername");
    errorUsername.textContent = "Enter Username";
  } else {
    errorUsername.textContent = "";
  }
});

email.addEventListener("change", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email.value);

  if (isEmailValid) {
    errorEmail.textContent = "";
    console.log("valid email");
    emailIsOk = true;
  } else {
    const errorEmail = document.querySelector("#errorEmail");
    errorEmail.textContent = "Your email is not valid.";
    emailIsOk = false;
    console.log("not valid email");
  }
});

password.addEventListener("keyup", (event) => {
  const password = formSelect.querySelector("#password");
  if (event.target.value.length < 8) {
    password.classList.add("border-red");
    const errorPassword = document.querySelector("#errorPassword");
    errorPassword.textContent = "Password must have 8 char";
    confirm.disabled = true;
  } else {
    password.classList.remove("border-red");
    errorPassword.textContent = "";
    confirm.disabled = false;

    registrationData.name = event.target.value;
  }
});

confirm.addEventListener("change", () => {
  console.log("password", password.value);
  console.log("confirm", confirm.value);
  if (password.value === confirm.value) {
    errorConfirm.textContent = "";
  } else {
    const errorConfirm = document.querySelector("#errorConfirm");
    errorConfirm.textContent = "Password do not match";
  }
});

formSelect.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit körs");
  // validateForm()§
});

const registrationData = {
  name: "",
  username: "",
  email: "",
  password: "",
};
