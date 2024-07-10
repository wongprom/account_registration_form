const formSelect = document.querySelector(".form-select");
const fullName = formSelect.querySelector("#fullname");
const username = formSelect.querySelector("#username");
/*const email = formSelect.querySelector("#email");
const confirm = formSelect.querySelector("#confirm"); */
const confirm = formSelect.querySelector("#confirm");
const submitBtn = formSelect.querySelector("#submit-btn");

const password = formSelect.querySelector("#password");
let isFormValid = false;
submitBtn.disabled = !isFormValid;

document.addEventListener("keyup", () => {
  
  console.log("evrnt på document")
  // se om fullname är valid


    
  if (fullName.value === "") {
    const errorFullname = document.querySelector("#errorFullname");
    errorFullname.textContent = "Enter fullname";
  } else {
    errorFullname.textContent = ""
  }

  if(username.value === ""){
    const errorUsername = document.querySelector("#errorUsername");
    errorUsername.textContent = "Enter Username";
  }
  else{
    errorUsername.textContent = "";
  }

  if (password.value.length < 8) {
    password.classList.add("border-red");
    const errorPassword = document.querySelector("#errorPassword");
    errorPassword.textContent = "Error password fel ";
    /* isFormValid = false;
    submitBtn.disabled = !isFormValid; */
  } else {
    password.classList.remove("border-red");
    errorPassword.textContent = "";
    /* isFormValid = true;
    submitBtn.disabled = !isFormValid; */

    // registrationData.name = event.target.value;
  }
  


// disable button or not!!!!!!!!!
  if (fullName.value != "" && password.value.length > 7) 
    {
      isFormValid = true;
      submitBtn.disabled = !isFormValid;
  }
  else{
    isFormValid = false;
      submitBtn.disabled = !isFormValid;
  }
  
  //se om password är valid
});

// Error messages for inputs

const registrationData = {
  name: "",
  username: "",
  email: "",
  password: "",
};

// Validate password min 8 char
/* password.addEventListener("keyup", (event) => {
  const password = formSelect.querySelector("#password");
  if (event.target.value.length < 8) {
    password.classList.add("border-red");
    const errorPassword = document.querySelector("#errorPassword");
    errorPassword.textContent = "Error password fel ";
  } else {
    password.classList.remove("border-red");
    errorPassword.textContent = "";

    registrationData.name = event.target.value;
  }
}); */
// set isFormValid based on fullname.value
/* fullName.addEventListener("keyup", () => {
  console.log("submitBtn:", submitBtn);
  
  if (fullName.value != "") {
  } else {
    const errorFullname = document.querySelector("#errorFullname");
    errorFullname.textContent = "Enter fullname";
  }
}); */

console.log("registrationData: ", registrationData);

formSelect.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit körs");
  // validateForm()§
});


