const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

signupBtn.addEventListener("click", () => {
  signup.style.left = "50%";
  signup.style.opacity = "1";
  login.style.opacity = "0";
  login.style.left = "50%";
});

loginBtn.addEventListener("click", () => {
  login.style.left = "0";
  login.style.opacity = "1";
  signup.style.opacity = "0";
  signup.style.left = "0";
});
