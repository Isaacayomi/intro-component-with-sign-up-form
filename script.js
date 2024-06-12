const firstNameInput = document.querySelector("#firstName");
const firstNameError = document.querySelector(".firstName__err");
const lastNameInput = document.querySelector("#lastName");
const lastNameError = document.querySelector(".lastName__err");
const email = document.querySelector("#email");
const emailError = document.querySelector(".email__err");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".password__err");
const submitBtn = document.querySelector(".cta__btn");
const errorMsg = document.querySelectorAll(".err__msg");

const validateFields = () => {
  if (firstNameInput.value.trim().length === 0) {
    firstNameError.style.display = "block";
    firstNameInput.style.border = "1px solid #ff7a7a";
  } else {
    firstNameError.style.display = "none";
    firstNameInput.style.border = "1px solid #dedede ";
    console.log("correct details");
  }

  if (lastNameInput.value.trim().length === 0) {
    lastNameInput.style.border = "1px solid #ff7a7a";
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
    lastNameInput.style.border = "1px solid #dedede ";
    console.log("correct details2");
  }

  if (password.value.trim().length === 0) {
    passwordError.style.display = "block";
    password.style.border = "1px solid #ff7a7a";
  } else {
    passwordError.style.display = "none";
    password.style.border = "1px solid #dedede ";
    console.log("correct details4");
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateFields();
  document.querySelectorAll("input").forEach(function (i) {
    i.value = " ";
  });
});
