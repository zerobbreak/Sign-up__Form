// function validate(){
//     const password = document.getElementById('password');
//     const confirm_password = document.getElementById('confirm-password');
//     const errorMessage = document.getElementById('error-message');

//     password.addEventListener('input', function(){
//         if(password.value !== confirm_password.value ){
//             errorMessage.textContent = 'Password cannot be empty'
//         }else{
//             errorMessage.textContent = '';
//         }
//     })
// }

// const validatebtn = document.getElementById("submitbtn");
// validatebtn.addEventListener("click", function () {
//   const password = document.getElementById("password");
//   const confirm_password = document.getElementById("confirm-password");
//   const errorMessage = document.getElementById("error-message");

//   password.addEventListener("input", function () {
//     if (password.value !== confirm_password.value) {
//       errorMessage.textContent = "Password cannot be empty";
//     } else {
//       errorMessage.textContent = "";
//     }
//   });
// });

function validatePasswords() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const passwordMatchMessage = document.getElementById(
    "password-match-message"
  );
  

  if (password !== confirmPassword) {
    passwordMatchMessage.style.display = "block";
    return false;
  } else {
    passwordMatchMessage.style.display = "none";
    // Add your code here to handle successful form submission or other actions
    return true;
  }
}
