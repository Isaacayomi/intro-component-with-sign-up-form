const inputs = document.querySelectorAll("input");
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

const handleFieldError = (inputEl, errorEl, errorMsg = "") => {
  if (inputEl.value.trim().length === 0) {
    errorEl.style.display = "block";
    inputEl.style.border = "1px solid #ff7a7a";
  } else {
    errorEl.style.display = "none";
    inputEl.style.border = "1px solid #dedede";
  }
  if (errorMsg) {
    errorEl.textContent = errorMsg;
  }
};

const validateFields = () => {
  handleFieldError(firstNameInput, firstNameError);
  handleFieldError(lastNameInput, lastNameError);
  handleFieldError(password, passwordError);

  if (password.value.includes(" ")) {
    handleFieldError(
      password,
      passwordError,
      "Password cannot include empty spaces"
    );
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    emailError.style.display = "block";
    email.style.border = "1px solid #ff7a7a";
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid #dedede";
  }
  return;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateFields();

  if (
    firstNameError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    emailError.style.display === "none" &&
    passwordError.style.display === "none"
  ) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    email.value = "";
    password.value = "";
  }
});
