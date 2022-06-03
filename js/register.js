/* ************************** */
/*                            */
/*        register.js         */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// icons declared for confirm password functionality
let checkMark = document.getElementById("check_mark");
checkMark.style.display = "none";

let crossMark = document.getElementById("cross_mark");
crossMark.style.display = "none";

// function to register the user
function addUser(event) {
  // variable to fetch the value of the confirm password field
  let confPass = document.getElementById("pass-repeat").value;

  // user object
  let user = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    username: document.getElementById("username").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    gender: document.getElementById("reg_form").gender.value,
    password: document.getElementById("pass").value,
    maxscore: 0,
  };

  // condition to check for empty fields
  if (
    user.firstName === "" ||
    user.lastName === "" ||
    user.username === "" ||
    user.phone === "" ||
    user.email === "" ||
    user.password === "" ||
    confPass === ""
  ) {
    alert("Please complete the registration form.");
    event.preventDefault();
  } else {
    // variable to store the entered username
    let confirmUsername = JSON.parse(localStorage.getItem(user.username));

    // condition to check if the entered phone number is 10 digits
    if (isPhoneNumberValid(user.phone)) {
      // condition to check if the entered email is in correct format using the isEmailValid function
      if (isEmailValid(user.email)) {
        // condition to check if a user with the entered username already exists
        if (confirmUsername != undefined) {
          alert("Username already exists!");
          event.preventDefault();
        } else {
          // making sure user confirms password before registering the user
          if (confirmPassword()) {
            // adding new user to the localstorage
            localStorage.setItem(user.username, JSON.stringify(user));
            alert("Account created successfully!");
          } else {
            alert("Please confirm your password.");
            event.preventDefault();
          }
        }
      } else {
        alert("Please enter a valid email address.");
        event.preventDefault();
      }
    } else {
      alert("Please enter a valid phone number.");
      event.preventDefault();
    }
  }
}

// function to check if the password and confirm password fields match
function confirmPassword() {
  let pass = document.getElementById("pass").value;
  let repeatPass = document.getElementById("pass-repeat").value;

  // condition to compare the passwords
  if (pass != repeatPass) {
    // displaying the cross mark
    checkMark.style.display = "none";
    crossMark.style.display = "block";
    return false;
  } else {
    // displaying the check mark
    checkMark.style.display = "block";
    crossMark.style.display = "none";
    return true;
  }
}

// condition to check for 10 digits in phone number
function isPhoneNumberValid(phoneNum) {
  // checking using regular expressions
  var phoneNumberChars = /^\d{10}$/;
  if (phoneNum.match(phoneNumberChars)) {
    return true;
  } else {
    return false;
  }
}

// condition to check email format
function isEmailValid(email) {
  // checking mail format using regular expressions
  let mailCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailCharacters)) {
    return true;
  } else {
    return false;
  }
}
