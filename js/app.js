/* ************************** */
/*                            */
/*          app.js            */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// capturing the register and sign in <li> tags
let toggleButtons = document.getElementsByClassName("toggle_on_sign_in");

// capturing the hidden sign out <li> tag
let signOut = document.getElementById("sign_out");

// setting the loggedInUser key to a variable
let user = sessionStorage.loggedInUser;

// condition to check is the user is logged
if (user != undefined) {
  // displaying the sign out button
  signOut.style.display = "block";
  for (let i = 0; i < toggleButtons.length; i++) {
    //   hiding the sign in and register button
    toggleButtons[i].style.display = "none";
  }
} else {
  // hiding the sign out button
  signOut.style.display = "none";
  for (let i = 0; i < toggleButtons.length; i++) {
    //   displaying the sign in and register button
    toggleButtons[i].style.display = "block";
  }
}

// function to sign out the user and reload the page to refresh the navbar and page content
function signOutUser() {
  sessionStorage.clear();
  location.reload();
}

// function to show usernames and high scores on the leaderboard, the high scores are sorted in descending order
function updateLeaderboard() {
  // capturing the <tr> elements from the leaderboard table
  let firstPos = document.getElementById("first");
  let secondPos = document.getElementById("second");
  let thirdPos = document.getElementById("third");
  let fourthPos = document.getElementById("fourth");
  let fifthPos = document.getElementById("fifth");

  // variable to fetch user objects' keys from the localStorage
  let userKeys = Object.keys(localStorage);

  // variable to store the fecthed JSON user objects as js user bjects
  let userInfo = {};

  // array to store the user js objects
  let users = [];

  // array to sort the users on the basis of maxscore
  let sortedUsers = [];

  // loop to convert the stored JSON user objects in localStorage to js user objects and to push them in the users array
  for (let i = 0; i < userKeys.length; i++) {
    userInfo = JSON.parse(localStorage.getItem(userKeys[i]));
    users.push(userInfo);
  }

  // sorting the users on the basis of maxscore using the built-in array method .sort()
  sortedUsers = users.slice(0);
  sortedUsers.sort(function (a, b) {
    return b.maxscore - a.maxscore;
  });

  // loop to display the usernames and high scores of users in descending order of maxscore
  for (let i = 0; i < sortedUsers.length; i++) {
    // using switch statement to print out the sorted array as it is
    switch (i) {
      case 0:
        firstPos.innerHTML =
          '<td>1</td> <td style="color: gold;">' +
          sortedUsers[i].username +
          "</td><td>" +
          sortedUsers[i].maxscore +
          "</td>";
        break;
      case 1:
        secondPos.innerHTML =
          '<td>2</td> <td style="color: #C0C0C0;">' +
          sortedUsers[i].username +
          "</td><td>" +
          sortedUsers[i].maxscore +
          "</td>";
        break;
      case 2:
        thirdPos.innerHTML =
          '<td>3</td> <td style="color: rgb(176, 141, 87);">' +
          sortedUsers[i].username +
          "</td><td>" +
          sortedUsers[i].maxscore +
          "</td>";
        break;
      case 3:
        fourthPos.innerHTML =
          "<td>4</td> <td>" +
          sortedUsers[i].username +
          "</td><td>" +
          sortedUsers[i].maxscore +
          "</td>";
        break;
      case 4:
        fifthPos.innerHTML =
          "<td>5</td> <td>" +
          sortedUsers[i].username +
          "</td><td>" +
          sortedUsers[i].maxscore +
          "</td>";
        break;
    }
  }
}
