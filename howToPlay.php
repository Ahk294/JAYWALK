<!-- 
/* ************************** */
/*                            */
/*       howToPlay.php        */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */ 
-->

<?php
// including the common.php file to use its functions
include('common.php');

// calling the outputHeader function to display the header content of the page
outputHeader('How To Play');

// calling the outputNavbar function to display the navbar
outputNavbar('How To Play');
?>

<!-- how to play page content -->
<div id="howToPlay_content" class="content">
    <h1 class="heading">HOW TO PLAY</h1>
    <div class="wrapper">
        <div class="container" style="margin-top: 20px;">
            <div class="howToPlay">
                <!-- using ordered list for default numbering of the points -->
                <ol>
                    <li>
                        The aim is to cross the roads without running into the moving
                        objects (vehicles) or being hit by them.
                    </li>
                    <li>
                        You can move in any direction to cross the roads.
                    </li>
                    <li>
                        If you come in contact with any vehicle, the game resets and you
                        lose a life.
                    </li>
                    <li>
                        You earn <span style="color: rgb(77, 255, 77);">1 point</span> for every <span style="color: rgb(77, 255, 77);">progressive</span> move forward, whether you crash or not.
                    </li>
                    <li>
                        You lose <span style="color: rgb(255, 77, 77);">1 point</span> for every <span style="color: rgb(255, 77, 77);">regressive</span> move backward, whether you crash or not.
                    </li>
                    <li>
                        There is no time limit, however, you only start with 3 lives and
                        the game is over when you have no more lives left.
                    </li>
                    <li>
                        The final score is only recorded after the game is over, i.e.
                        you used all your lives.
                    </li>
                    <li>
                        The speed of the vehicles increases everytime you move to the next level.
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>

<?php
// calling the outputFooter function to display the footer content of the page
outputFooter('How To Play');
?>