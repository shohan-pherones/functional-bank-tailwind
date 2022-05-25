document.getElementById("login-submit").addEventListener("click", function () {
  //get user email
  const userEmailField = document.getElementById("user-email");
  const userEmail = userEmailField.value;

  //get user password
  const userPasswordField = document.getElementById("user-password");
  const userPassword = userPasswordField.value;

  //valid user condition
  if (userEmail == "admin" && userPassword == "admin") {
    window.location.href = "banking.html";
  }
});
