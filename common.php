<!-- 
/* ************************** */
/*                            */
/*        common.php          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */ 
-->

<!-- PHP file to reduce the reuse of HTML code -->

<?php
// function for creating the header of the pages
function outputHeader($pageName)
{
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8" />';
    echo '<title>' . $pageName . '</title>';
    echo '<link rel="stylesheet" href="css/styles.css" type="text/css" />';
    echo '<!-- CDN link of Font Awesome for the icons used in the website -->';
    echo '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />';
    // condition for embeded styling
    if ($pageName == "JAYWALK") {
        echo '<!-- embeded styling used only for the game frame in the home page -->';
        echo '<style>';
        echo '#game_frame {';
        echo 'border: #6fffe9 2px solid;';
        echo 'border-radius: 10px;';
        echo 'position: absolute;';
        echo 'left: 50%;';
        echo 'top: 48%;';
        echo 'width: 1000px;';
        echo 'height: 475px;';
        echo 'background-color: white;';
        echo 'transform: translate(-50%, -41%);';
        echo 'background: url("./images/game/background.png");';
        echo '}';

        echo '#game_frame h1 {';
        echo 'display: flex;';
        echo 'justify-content: space-between;';
        echo 'color: white;';
        echo '}';

        echo '#game_frame h1 span {';
        echo 'position: relative;';
        echo 'top: -20px;';
        echo 'margin: 15px;';
        echo 'z-index: 1;';
        echo '}';

        echo '#game_frame h1 span i {';
        echo 'color: red;';
        echo '}';
        echo '</style>';
    }
    echo '</head>';
    echo '<body>';
}

// function for running the HTML of the intro animation (only for the home page)
function outputIntro()
{
    echo '<div class="intro">';
    echo '<h1 class="intro_content">';
    echo '<span class="name">J</span>';
    echo '<span class="name">A</span>';
    echo '<span class="name">Y</span>';
    echo '<span class="name">W</span>';
    echo '<span class="name">A</span>';
    echo '<span class="name">L</span>';
    echo '<span class="name">K</span>';
    echo '</h1>';
    echo '</div>';
}

// function for creating the navbar for all the pages
function outputNavbar($pageName)
{
    // array of page names
    $pages = array("Sign In", "Register", "Leaderboard", "How To Play", "JAYWALK");

    // array of page links
    $pageLinks = array("signIn.php", "register.php", "leaderboard.php", "howToPlay.php", "home.php");

    // array of page icons
    $pageIcons = array("fas fa-sign-in-alt", "fas fa-user-plus", "fas fa-trophy", "fas fa-question", "");

    echo '<!-- navigation bar -->';
    echo '<header>';
    echo '<nav>';
    echo '<div id="navbar">';
    echo '<ul>';

    // extra li tag for sign out button which will only display when user is logged in
    echo '<li id="sign_out">';
    echo '<a href="#signOut" onclick="signOutUser()">';
    echo '<i class="fas fa-sign-out-alt"></i> Sign Out';
    echo '</a>';
    echo '</li>';

    // looping through the pages and applying the inline style and classes accordingly
    for ($i = 0; $i < count($pages); $i++) {
        echo '<li ';
        //  applying the inline style of 'float: left' only to the home page link tag (JAYWALK)
        if ($pages[$i] == "JAYWALK") {
            echo 'style="float: left"><a ';
        } else if ($pages[$i] == "Sign In" || $pages[$i] == "Register") {
            echo 'class="toggle_on_sign_in"><a ';
        } else {
            echo '><a ';
        }
        // the class of 'selected' is applied to the page that is currently being rendered
        if ($pages[$i] == $pageName) {
            echo 'class="selected" style="color: #6fffe9" ';
        }
        // using the arrays to fill in the right information for the links, icons, and page names
        echo 'href="' . $pageLinks[$i] . '"><i class="' . $pageIcons[$i] . '"></i> ' . $pages[$i] . '</a>';
        echo '</li>';
    }
    echo '</ul>';
    echo '</div>';
    echo '</nav>';
    echo '</header>';
}

// function for creating the footer of all the pages
function outputFooter($pageName)
{
    echo '<!-- footer -->';
    echo '<footer>';
    echo '<div class="footer"';
    // applying the id of 'footer_fixed' to all pages except home page
    if ($pageName != "JAYWALK") {
        echo ' id="footer_fixed">';
    } else {
        // pushing the footer at home page down to avoid overlapping
        echo 'style="top: 455px">';
    }
    echo '<hr />';
    echo '<p><span>Best resolution for this site: 1366 x 661</span> 
    <span><img src="./images/JAYWALK_LOGO.PNG" alt="logo" class="logo" /></span> 
    <span>&copy;Abdul Haseeb Khan - M00792907</span></p>';
    echo '</div>';
    echo '</footer>';
    echo '<!-- javascript src -->';
    echo '<script src="js/app.js"></script>';
    switch ($pageName) {
        case "JAYWALK":
            echo '<script src="js/home.js"></script>';
            echo '<script src="js/game/index.js"></script>';
            echo '<script src="js/game/player.js"></script>';
            echo '<script src="js/game/vehicles.js"></script>';
            echo '<script src="js/game/actions.js"></script>';
            break;
        case "Register":
            echo '<script src="js/register.js"></script>';
            break;
        case "Sign In":
            echo '<script src="js/signIn.js"></script>';
            break;
    }
    echo '</body>';
    echo '</html>';
}
?>