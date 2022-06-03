/* ************************** */
/*                            */
/*         signIn.js          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// function to let only registered users sign in
function checkUser(event) {
  // creating user object for the user trying to sign in
  let userSignIn = {
    username: document.getElementById("username").value,
    pass: document.getElementById("pass").value,
  };

  // condition to check for empty fields
  if (userSignIn.username === "" || userSignIn.pass === "") {
    alert("Please enter your details to continue.");
    event.preventDefault();
  } else {
    // searching in the localstorage if this user exists
    let curUser = JSON.parse(localStorage.getItem(userSignIn.username));

    // condition to confirm the existance of the user's account
    if (curUser != undefined) {
      // checking the entered credentials against the saved credentials of the user
      if (
        userSignIn.username === curUser.username &&
        userSignIn.pass === curUser.password
      ) {
        alert("WELCOME!");
        // setting the loggedInUser key to the currently logged in user's username
        sessionStorage.loggedInUser = curUser.username;
      } else {
        alert("Incorrect username or password.");
        event.preventDefault();
      }
    } else {
      alert("Username does not exist, please create an account.");
      event.preventDefault();
    }
  }
}
