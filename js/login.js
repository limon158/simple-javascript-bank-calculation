// console.log('javaScript start');
document
  .getElementById("btn-submit")
  .addEventListener("click", function (event) {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if (email === "104673469" && password === "11224") {
      window.location.href = "bank.html";
    } else {
      alert("Email or Password is incorrect!");
      emailField.value = "";
      passwordField.value = "";
    }
  });
