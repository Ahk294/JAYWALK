/* ************************** */
/*                            */
/*         home.js            */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// **************************** animation code starts here ******************************
// selecting the 3 classes that will help in the animation
let intro = document.querySelector(".intro");
let name = document.querySelector(".intro_content");
let nameSpans = document.querySelectorAll(".name");

/* starting the animation immediately when the 'website content' is loaded.
   when the DOMContentLoaded event has been triggered, the arrow function will be called and the animation will start */
window.addEventListener("DOMContentLoaded", () => {
  // the 'setTimeout' function sets a timer and calls a function upon the completion of the timer
  setTimeout(() => {
    //   selecting all the spans (letters) and looping through them
    nameSpans.forEach((span, index) => {
      //   this function adds the 'fade-in' class to the spans
      setTimeout(() => {
        //   adding the 'fade-in' class to all the spans
        span.classList.add("fade-in");
        // setting a 150 millisecond gap between each letters fade-in animation
      }, (index + 1) * 200);
    });

    setTimeout(() => {
      //   selecting all the spans (letters) and looping through them
      nameSpans.forEach((span, index) => {
        //   this function removes the 'fade-in' class and adds the 'fade-out' class to the spans
        setTimeout(() => {
          span.classList.remove("fade-in");
          span.classList.add("fade-out");
          // setting a 50 millisecond gap between each letters fade-out animation
        }, (index + 1) * 50);
      });
    }, 2000);

    // this function slides the entire 'intro' div up
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2500);
  });
});
// **************************** animation code ends here ******************************

// **************************** home page code starts here ******************************
// setting the loggedInUser key to a variable
let loggedInUsername = sessionStorage.loggedInUser;

// displaying username only if the user is logged in
if (loggedInUsername != undefined) {
  // displaying the currently logged in user's username on homepage
  document.getElementById("display_username").innerHTML =
    "You are playing as: <u>" + loggedInUsername + "</u>";
} else {
  // displaying the currently logged in user's username on homepage
  document.getElementById("display_username").innerHTML =
    "You are playing as: <u>Guest</u>";
}

// **************************** home page code ends here ******************************
