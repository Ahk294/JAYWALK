<!-- 
/* ************************** */
/*                            */
/*         home.php           */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */ 
-->

<?php
// including the common.php file to use its functions to avoid code repetition
include('common.php');

// calling the outputHeader function to display the header content of the page
outputHeader('JAYWALK');

// calling the outputIntro function to display the intro animation for the home page only
outputIntro();

// calling the outputNavbar function to display the navbar
outputNavbar('JAYWALK');
?>

<!-- home/game page content -->
<div id="home_content" class="content">
    <h1 id="display_username"></h1>

    <!-- entire game is in a div with a class of game_wrapper -->
    <div id="game_frame">
        <h1>
            <span id="lives">
                <i class="fas fa-heart"></i> <i class="fas fa-heart"></i> <i class="fas fa-heart"></i>
            </span>
        </h1>
        <!-- canvas element used to draw the different game components -->
        <canvas id="canvas1"></canvas>
    </div>
</div>

<?php
// calling the outputFooter function to display the footer content of the page
outputFooter('JAYWALK');
?>