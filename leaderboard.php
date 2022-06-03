<!-- 
/* ************************** */
/*                            */
/*      leaderboard.php       */
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
outputHeader('Leaderboard');

// calling the outputNavbar function to display the navbar
outputNavbar('Leaderboard');
?>

<!-- leaderboard page content -->
<div id="leaderboard_content" class="content">
    <h1 class="heading">LEADERBOARD</h1>
    <div id="leaderboard">
        <div>
            <table onmouseover="updateLeaderboard()">
                <thead>
                    <tr>
                        <th>POSITION</th>
                        <th>USERNAME</th>
                        <th>HIGHSCORE</th>
                    </tr>
                </thead>
                <tr id="first">
                    <td>1</td>
                    <!-- inline styling used to assign color to top 3 players -->
                    <td style="color: gold;"> - </td>
                    <td> - </td>
                </tr>
                <tr id="second">
                    <td>2</td>
                    <td style="color: #C0C0C0;"> - </td>
                    <td> - </td>
                </tr>
                <tr id="third">
                    <td>3</td>
                    <td style="color: rgb(176, 141, 87);"> - </td>
                    <td> - </td>
                </tr>
                <tr id="fourth">
                    <td>4</td>
                    <td> - </td>
                    <td> - </td>
                </tr>
                <tr id="fifth">
                    <td>5</td>
                    <td> - </td>
                    <td> - </td>
                </tr>
                <tfoot>
                    <tr>
                        <td colspan="3">
                            <!-- inline styling used to make the 'Sign In' link stand out -->
                            <a href="./signIn.php" style="color: white; font-weight: bold;">Sign in</a>
                            to compete!
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>

<?php
// calling the outputFooter function to display the footer content of the page
outputFooter('Leaderboard');
?>